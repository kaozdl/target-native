import { StyleSheet } from 'react-native';
import { colors } from '../../../config';

const styles = StyleSheet.create({
  input: {
    borderColor: colors.black,
    borderWidth: 1,
    width: 220,
    padding: 10,
    textAlign: 'center'
  },
  label: {
    color: colors.black,
    fontSize: 12,
    textAlign: 'center'
  },
});

export default styles;
