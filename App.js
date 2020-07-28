import React from 'react';
import { StyleSheet, View } from 'react-native';
import StopwatchContainer from './stopwatch.container.jsx'
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StopwatchContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight*2,
  },

  title: {
    fontSize: 30,
    color: "#74526C",
    marginBottom: "8%"
  }

});