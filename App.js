import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import SignIn from './screens/signIn';
import createStore from './store/configureStore';

const store = createStore({});
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <SignIn />
        </View>
      </Provider>
    );
  }
}
