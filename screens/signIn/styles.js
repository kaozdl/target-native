import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerFont: {
    fontWeight: 'bold',
    fontSize: 31,
  },
  component: {
    padding: 20
  }
});

export default styles;