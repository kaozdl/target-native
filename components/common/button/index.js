import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ name, action }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={action}
  >
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
);

export default Button;

