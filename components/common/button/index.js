import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({name, action}) => (
  <View>
    <TouchableOpacity
      style={styles.button}
      onPress={action}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  </View>
);

export default Button;

