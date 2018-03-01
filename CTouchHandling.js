import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';

import {TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//Generally, you can use TouchableHighlight anywhere you would use a button or link on web. The view's background will be darkened when the user presses down on the button.
//You may consider using TouchableNativeFeedback on Android to display ink surface reaction ripples that respond to the user's touch.
//TouchableOpacity can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.
//If you need to handle a tap gesture but you don't want any feedback to be displayed, use TouchableWithoutFeedback.

class CTouchHandling extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        }

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }

    render() {
        return (
            <View style={{padding: 10}}>
            <Text>CTouchHandling</Text>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                    >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    }
  })

export default CTouchHandling;