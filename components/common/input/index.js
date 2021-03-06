import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = ({ handler, placeholder, label, bindTo }) => (
  <View style={{ padding: 10 }}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={(text) => handler(bindTo, text)}
      autoCapitalize="none"
    />
  </View >
)

export default Input;