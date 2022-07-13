import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PostsList } from './src/components';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <PostsList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
});
