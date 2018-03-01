import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, Switch } from 'react-native'
import { Card } from 'react-native-elements'
import {Facebook, Google} from 'expo'

class CCard extends Component {

    state = {
        switchValue: true
      };
    
      _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue
      }));
    

    _handleGoogleLogin = async () => {
        try {
          const { type, user } = await Google.logInAsync({
            androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
            iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
            androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
            iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
            scopes: ['profile', 'email']
          });
    
          switch (type) {
            case 'success': {
              Alert.alert(
                'Logged in!',
                `Hi ${user.name}!`,
              );
              break;
            }
            case 'cancel': {
              Alert.alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              break;
            }
            default: {
              Alert.alert(
                'Oops!',
                'Login failed!',
              );
            }
          }
        } catch (e) {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      };

    _handleFacebookLogin = async () => {
        try {
          const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            '1201211719949057', // Replace with your own app id in standalone app
            { permissions: ['public_profile'] }
          );
    
          switch (type) {
            case 'success': {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              const profile = await response.json();
              Alert.alert(
                'Logged in!',
                `Hi ${profile.name}!`,
              );
              break;
            }
            case 'cancel': {
              Alert.alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              break;
            }
            default: {
              Alert.alert(
                'Oops!',
                'Login failed!',
              );
            }
          }
        } catch (e) {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      };

    render() {
        return (
            <View>
                <Switch
                    onValueChange={this._handleToggleSwitch}
                     value={this.state.switchValue}
                 />
                 <Button
                    title="Login with Facebook"
                    onPress={this._handleFacebookLogin}
                />
                <Button
                     title="Login with Google"
                     onPress={this._handleGoogleLogin}
                 />
                <Text>CCard</Text>
                <Card title="test card">
                    <Text>
                        Local files and assets can be imported by dragging and dropping them into the editor
                    </Text> 
                </Card>
            </View>
        );
    }
}

export default CCard;