import React from 'react';
import { Text, View } from 'react-native';

import { APP_NAME } from '../../config';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/session';
import styles from './styles';

import Background from '../common/background';
import MapScreen from '../map';

import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Ruler from '../../components/common/ruler';
import Loader from '../../components/common/loader';


class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
  }
  handleInput = (inputName, text) => this.setState({ [inputName]: text });
  handleSubmit = () => {
    const { username, password } = this.state;
    this.props.login(username, password);
  }
  handleSignOut = () => { this.props.logout() };
  render() {
    let isLogged = true//this.props.session.isLoggedIn;
    let isLoading = this.props.session.isLoading;
    if (isLoading)
      return (
        <Background>
          <Loader />
        </Background>
      )
    else if (isLogged)
      return (
        <MapScreen />
      )
    else
      return (
        <Background>
          <View style={styles.header}>
            <Text style={styles.headerFont}>{APP_NAME}</Text>
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
            <Button name="SIGN IN" action={this.handleSubmit}></Button>
            <View style={styles.component}>
              <Text>Forgot your password?</Text>
            </View>
            <View style={styles.component}>
              <Text style={{ fontWeight: 'bold' }}>CONNECT WITH FACEBOOK</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Ruler
              length={100}
              text="SIGN UP"
            />
          </View>
        </Background>
      )
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)