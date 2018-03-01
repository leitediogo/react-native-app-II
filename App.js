
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CImage from './CImage'
import CTextField from './CTextField';
import CTouchHandling from './CTouchHandling';
import CScrollView from './CScrollView';
import CLists from './CLists'
import CCard from './CCard'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.title}>Test react-native App IIIII</Text>
        <CLists />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold'
  }
});