import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { images } from '../../../config';

const CircleButton = ({ label, icon, action, textUp = false, border = true }) => {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        {textUp && label && <Text>{label}</Text>}
        <TouchableOpacity
          style={[styles.button, border && styles.buttonBorder]}
          onPress={action}>
          <Image source={images[icon]} />
        </TouchableOpacity>
        {!textUp && label && <Text style={{ marginTop: 10 }} >{label}</Text>}
      </View>
    </View>
  )
}
export default CircleButton;