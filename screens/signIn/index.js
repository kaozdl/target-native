import React from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { login } from '../../actions/session';
import styles from './styles';
import Background from '../common/background';

import Input from '../../components/common/input';
import Button from '../../components/common/button';


class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }
  handleInput = (inputName, text) => this.setState({ [inputName]: text });
  handleSubmit = () => {
    const { username, password } = this.state;
    const { signIn } = this.props;
    console.log('PRELOGIN');
    const user = { username: username, password: password };
    this.props.login(username, password);
    console.log('POSTLOGIN');
    /* let response = await fetch('https://kaozdl-target.herokuapp.com/api/v1/rest-auth/login/', {
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
       }));*/
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

const mapStateToProps = (state) => state;
const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)