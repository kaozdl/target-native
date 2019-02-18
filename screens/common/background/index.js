import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';

export default class Background extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./bkgnd.png')}
        style={styles.backgroundImage}>
        {this.props.children}
      </ImageBackground>
    )
  }
}

