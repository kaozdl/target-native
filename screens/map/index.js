import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

import CircleButton from '../../components/common/iconButton';

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          />
          <Text>Target Points</Text>
          />
        </View>
        <View style={styles.content}>
        </View>
        <View style={styles.footer}>
          <CircleButton
            label="CREATE NEW TARGET"
            icon="page1"
            action={() => alert("This should create a new target")}
          />
        </View>
      </View>
    )
  }
}

export default MapScreen;