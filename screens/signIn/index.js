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
    this.props.login(username, password);
  }
  render() {
    let isLogged = this.props.session.isLoggedIn;
    if (isLogged)
      return (
        <Background>
          <View style={styles.header}>
            <Text>
              Welcome!
          </Text>
          </View>
        </Background>
      )
    else
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
      )
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)