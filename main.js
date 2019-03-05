//Render different screens based on the app state
import React from 'react';
import { connect } from 'react-redux';

import SignIn from './screens/signIn';
import Loader from './components/common/loader';
import MapScreen from './screens/map';
import Background from './screens/common/background';

class Main extends React.Component {
  render() {
    const isLogged = this.props.session.isLoggedIn;
    const isLoading = this.props.session.isLoading;
    if (isLoading) {
      return (
        <Background>
          <Loader />
        </Background>
      )
    } else if (isLogged) {
      return (
        <Background>
          <MapScreen />
        </Background>
      )
    } else {
      return (
        <Background>
          <SignIn />
        </Background>
      )
    }
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Main);