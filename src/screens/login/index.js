import {Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../../redux/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style.js';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    secured: true,
  });

  const userList = useSelector(state => state.userList);

  const verifyLogin = (username, password) => {
    let isCorrect = false;
    userList.users.forEach(user => {
      if (user.username === username && user.password === password) {
        isCorrect = true;
      }
    });
    return isCorrect;
  };

  const onSignInPressed = () => {
    //dispatch login
    if (verifyLogin(loginForm.username, loginForm.password)) {
      dispatch(loginUser({username: loginForm.username}));
      navigation.replace('Home');
    } else {
      //don't login
      Alert.alert('wrong credentials');
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Login</Text>
      <CustomInput
        placeholder="Username"
        value={loginForm.username}
        setValue={val => setLoginForm({...loginForm, username: val})}
      />
      <CustomInput
        placeholder="Password"
        value={loginForm.password}
        setValue={val => setLoginForm({...loginForm, password: val})}
        secured={loginForm.secured}
        RightIcon={() => (
          <TouchableOpacity
            onPress={() =>
              setLoginForm({...loginForm, secured: !loginForm.secured})
            }>
            <Text>{loginForm.secured ? 'show' : 'hide'}</Text>
          </TouchableOpacity>
        )}
      />
      <CustomButton text="Login" onPress={() => onSignInPressed()} />

      <View style={styles.changeContainer}>
        <Text>Don't have account, </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.underline}>Register now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
