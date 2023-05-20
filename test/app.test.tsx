import { rest } from 'msw';
import { render, screen, waitFor } from '@testing-library/react-native';
import { setupServer } from 'msw/node';
import App from '../App';

jest.mock('../modules/formatPrice.ts');

const mockProductDetailResponse = {
  title: 'Ini title',
  description: 'ini description',
  price: 10000
};

describe('first test', () => {
  const server = setupServer(
    rest.get('https://api.escuelajs.co/api/v1/products/2', (req, res, ctx) =>
      res(ctx.json(mockProductDetailResponse))
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render correct data', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(mockProductDetailResponse.title)).toBeOnTheScreen();
      expect(screen.getByText(mockProductDetailResponse.description)).toBeOnTheScreen();
      expect(screen.getByText(String(mockProductDetailResponse.price))).toBeOnTheScreen();
    });
  });
});
