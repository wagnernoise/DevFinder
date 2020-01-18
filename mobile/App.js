import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#1F1345'/>
      <Routes />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title :{
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#fff"
//   },
// });
