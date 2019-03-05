import { StyleSheet } from 'react-native';
import { colors } from '../../../config';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.white,
  },
  buttonBorder: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.black,
  }
})

export default styles;