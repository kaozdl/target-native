import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Background from '../common/background';

import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Selector from '../../components/common/selector';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      gender: '',
      key: 'NOT LOGGED IN',
    }
  }
  handleSelection = (selectName, value) => this.setState({ [selectName]: value });
  handleInput = (inputName, text) => this.setState({ [inputName]: text });
  handleSubmit = async () => {
    let response = await fetch('https://kaozdl-target.herokuapp.com/api/v1/rest-auth/registration/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password1: this.state.password,
        password2: this.state.password,
        email: this.state.email,
        one_signal_player_id: '--------',
        gender: this.state.gender,
      }),
    })
      .then((response) => {
        alert(JSON.stringify(response))
        let responseObj = JSON.parse(response);
        let login = (responseObj.bodyInit.key) ? responseObj._bodyInit.key : 'NOT LOGGED IN';
        this.setState({ key: login });
        alert(login);
      })
      .catch((response => {
        alert('Sign Up Error');
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
            label="NAME"
            bindTo="username"
            handler={this.handleInput}
          />
          <Input
            label="EMAIL"
            bindTo="email"
            handler={this.handleInput}
          />
          <Input
            label="PASSWORD"
            bindTo="password"
            placeholder="MIN. 6 CHARACTERS LONG"
            handler={this.handleInput}
            password={true}
          />
          <Selector
            label="GENDER"
            placeholderText="SELECT YOUR GENDER"
            bindTo='gender'
            values={[
              { label: 'MALE', value: 'M' },
              { label: 'FEMALE', value: 'F' },
              { label: 'OTHER', value: 'O' },
            ]}
            handler={this.handleSelection}
          />
          <Button name={"SIGN UP"} action={this.handleSubmit}></Button>
        </View>
        <View style={styles.footer}>
          <Text>____________</Text>
          <Text>SIGN IN</Text>
        </View>
      </Background>
    );
  }
}