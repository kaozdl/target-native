import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Background from '../common/background';

import Input from '../../components/common/input';
import Button from '../../components/common/button';


export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      key: "NOT LOGGED IN",
    }
  }
  handleInput = (inputName, text) => this.setState({ [inputName]: text });
  handleSubmit = async () => {
    let response = await fetch('https://kaozdl-target.herokuapp.com/api/v1/rest-auth/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => {
        let responseObj = JSON.parse(response);
        let login = (responseObj.bodyInit.key) ? responseObj.bodyInit.key : "NOT LOGGED IN";
        this.setState({ key: login });
        alert(login);
      })
      .catch((response => {
        alert("Login Error");
      }));
  }
  render() {
    return (
      <Background>
        <View style={styles.header}>
          <Text style={styles.headerFont}>TARGET MVD</Text>
        </View>
        <View style={styles.container}>
          <Input
            label={'USERNAME'}
            bindTo={'username'}
            handler={this.handleInput}
          />
          <Input
            label={'PASSWORD'}
            bindTo={'password'}
            handler={this.handleInput}
          />
          <Button name={"SIGN IN"} action={this.handleSubmit}></Button>
          <View style={{ padding: 20 }}>
            <Text>Forgot your password?</Text>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>CONNECT WITH FACEBOOK</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>____________</Text>
          <Text>SIGN UP</Text>
        </View>
      </Background>
    );
  }
}