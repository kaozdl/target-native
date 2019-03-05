import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';

import { loadTargets } from '../../actions/targets';

import styles from './styles';

import CircleButton from '../../components/common/iconButton';

class MapScreen extends React.Component {
  state = {
    isSelectingLocation: false,
    selectedCoordinates: '',
    markers: [],
  }
  componentDidMount() {
    try {
      this.props.fetch();
    } catch (error) {
      alert(error);
    }
  }
  handlePress = (press) => {
    this.setState({
      markers: [
        ...this.state.markers,
        { coordinate: press.coordinate, key: press.coordinate }
      ]
    })
    alert(`POINT ${press.coordinate.longitude} ${press.coordinate.latitude}`)
  }
  handleTargetButton = () => {
    this.setState({ isSelectingLocation: !this.state.isSelectingLocation });
    alert(this.state.isSelectingLocation ? 'Location selecting mode disabled' : 'Location selection mode enabled');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <CircleButton
              border={false}
              icon="user"
              action={() => alert("This should display the user profile")}
            />
          </View>
          <Text style={styles.headerText}>Target Points</Text>
          <View style={styles.headerRight}>
            <CircleButton
              border={false}
              icon="chat"
              action={() => alert("This should display the chats")}
            />
          </View>
        </View>
        <MapView
          style={styles.map}
          region={{
            latitude: -34.907052,
            longitude: -56.200849,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
          onPress={press => this.handlePress(press.nativeEvent)}
        >
          {this.state.markers.map((marker) => {
            return <Marker {...marker} />
          })}
        </MapView>
        <View style={styles.footer}>
          <CircleButton
            label="CREATE NEW TARGET"
            icon="crosshair"
            action={this.handleTargetButton}
          />
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(loadTargets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)