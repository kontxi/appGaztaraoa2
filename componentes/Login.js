import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

export default class Login extends Component {
  render(){
    return(
      <View>
          <TextInput />
          <TextInput />
          <TouchableHighlight>
            <Text>Login </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text> Signup</Text>
          </TouchableHighlight>


      </View>
    )
  }
}
