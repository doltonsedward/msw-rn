const formatPrice = (price: number, defaultPrice: string | number = 0): string | number => {
  if (price === 0) return defaultPrice;
  if (typeof price === 'string') return price;
  return `IDR ${price?.toFixed()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
};

export default formatPrice;
