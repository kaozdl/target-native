import { StyleSheet } from 'react-native';
import { colors } from '../../config';

const common = StyleSheet.create({
  common: {
    justifyContent: 'center',
    textAlign: 'center',
  }
})

const styles = StyleSheet.create({
  header: {
    ...common.common,
    flex: 0.15,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  content: {
    ...common.common,
    flex: 1,
    backgroundColor: 'green',
  },
  footer: {
    ...common.common,
    flex: 0.2,
    backgroundColor: colors.white,
    alignItems: 'center'
  },

});

export default styles;