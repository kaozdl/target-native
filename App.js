import React, { Component } from 'react';
import { View } from 'react-native';


import SignIn from './screens/signIn';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }
  handleInput = (inputName, text) => this.setState({ [inputName]: text });
  handleSubmit = () => {
    alert(this.state.username);
    alert(this.state.password);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SignIn />
      </View>
    );
  }
}