import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const CircleButton = ({ label, icon, action, textUp = false }) => {

  const resource = `../images/${icon}.png`;

  return (
    <View style={{ alignItems: 'center' }}>
      {textUp && label && <Text>{label}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={action}
      >
        <Image source={require({ resource })} />
      </TouchableOpacity>
      {!textUp && label && <Text style={{ marginTop: 10 }} >{label}</Text>}
    </View>
  )
}
export default CircleButton;