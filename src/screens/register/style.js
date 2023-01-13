import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  underline: {
    color: 'blue',
  },
  changeContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dob: {
    // width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  dobText: {
    fontSize: 18,
  },
  datePicker: {
    width: '60%',
  },
});
