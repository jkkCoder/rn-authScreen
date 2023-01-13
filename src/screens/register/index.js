import {Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';

import {useDispatch} from 'react-redux';
import {addUser, loginUser} from '../../../redux/userActions';

import {styles} from './style';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    secured: true,
    date: '01-01-2000',
  });

  const onSignInPressed = () => {
    const user = {
      firstname: registerForm.firstName,
      lastname: registerForm.lastName,
      username: registerForm.username,
      dob: registerForm.date,
      password: registerForm.password,
    };

    if (
      registerForm.username === '' ||
      registerForm.password === '' ||
      registerForm.firstName === '' ||
      registerForm.lastName === ''
    ) {
      Alert.alert('fields cannot be empty');
    } else {
      dispatch(addUser(user));
      dispatch(loginUser({username: registerForm.username}));

      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Register</Text>
      <CustomInput
        placeholder="First name"
        value={registerForm.firstName}
        setValue={val => setRegisterForm({...registerForm, firstName: val})}
      />
      <CustomInput
        placeholder="Last name"
        value={registerForm.lastName}
        setValue={val => setRegisterForm({...registerForm, lastName: val})}
      />
      <CustomInput
        placeholder="Username"
        value={registerForm.username}
        setValue={val => setRegisterForm({...registerForm, username: val})}
      />

      <View style={styles.dob}>
        <Text style={styles.dobText}>Date of Birth : </Text>
        <DatePicker
          style={styles.datePicker}
          date={registerForm.date}
          mode="date"
          format="DD-MM-YYYY"
          onDateChange={date => {
            setRegisterForm(prev => ({...prev, date: date}));
          }}
          confirmBtnText="confirm"
          cancelBtnText="cancel"
        />
      </View>
      <CustomInput
        placeholder="Password"
        value={registerForm.password}
        setValue={val => setRegisterForm({...registerForm, password: val})}
        secured={registerForm.secured}
        RightIcon={() => (
          <TouchableOpacity
            onPress={() =>
              setRegisterForm({...registerForm, secured: !registerForm.secured})
            }>
            <Text>{registerForm.secured ? 'show' : 'hide'}</Text>
          </TouchableOpacity>
        )}
      />
      <CustomButton text="Register" onPress={() => onSignInPressed()} />

      <View style={styles.changeContainer}>
        <Text>Already registered, </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.underline}>Login now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
