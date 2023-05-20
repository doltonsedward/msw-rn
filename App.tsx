import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import useGetData from './hooks/useGetData';
import { AppGetDataTypes } from './types';

export default function App() {
  const { data, isLoading } = useGetData<AppGetDataTypes>();

  if (isLoading) return <Text testID="loading-tid">Loading...</Text>;

  if (!data) return <Text>There is no data here</Text>;

  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
      <Text>{data.price}</Text>
      <Text>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
