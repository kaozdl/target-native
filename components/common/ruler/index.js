import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Ruler = ({ length, text, action }) => (
  <View>
    <View style={{ ...styles.ruler, width: length }} />
    <View>
      <Text
        style={styles.text}
        onPress={action}
      >
        {text}
      </Text>
    </View>
  </View>
)

export default Ruler;