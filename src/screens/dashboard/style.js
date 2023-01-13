import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5A5A4D',
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: 'lightblue',
    width: '30%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
