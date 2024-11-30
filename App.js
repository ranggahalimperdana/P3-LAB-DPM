import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Profile from './src/pages/Profile';  // Mengimpor halaman Profile

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <Profile />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
