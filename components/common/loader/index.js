import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../../config';
const Loader = () => (
  <View>
    <Text>Please Wait</Text>
    <ActivityIndicator
      animating={true}
      color={colors.grey}
      size='large'
    />
  </View>
)

export default Loader;