import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';

import {TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//Generally, you can use TouchableHighlight anywhere you would use a button or link on web. The view's background will be darkened when the user presses down on the button.
//You may consider using TouchableNativeFeedback on Android to display ink surface reaction ripples that respond to the user's touch.
//TouchableOpacity can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.
//If you need to handle a tap gesture but you don't want any feedback to be displayed, use TouchableWithoutFeedback.

class CTextField extends Component {
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
                <Text>CTextField</Text>
                <TextInput style={{height: 40}} placeholder="Type here to translate!" onChangeText={(text) => this.setState({text})} />
                <Button onPress={this._onPressButton} title="Press Me" color="#841584"/>
            </View>
        );
    }
}

export default CTextField;