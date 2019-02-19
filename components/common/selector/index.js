import React from 'react';

import { View, Text } from 'react-native';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';


const Selector = ({ label, placeholderText, values, bindTo, handler }) => {
  const ph = {
    label: placeholderText,
    value: '',
    color: 'black',
  }

  return (<View style={{ padding: 10 }}>
    {label && <Text style={styles.label}>{label}</Text>}
    <RNPickerSelect
      placeholder={ph}
      style={styles}
      items={values}
      onValueChange={(obj) => handler(bindTo, obj)}
    />
  </View>
  );
}

export default Selector;