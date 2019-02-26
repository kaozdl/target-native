import { StyleSheet } from 'react-native';
import { colors } from '../../../config';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 50,
  }
})

export default styles;