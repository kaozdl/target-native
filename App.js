import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Main from './main';
import createStore from './store/configureStore';

const store = createStore({});
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Main />
        </View>
      </Provider>
    );
  }
}
