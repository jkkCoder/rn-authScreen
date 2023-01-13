import 'react-native-gesture-handler';
import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Login from './src/screens/login/index';
import Register from './src/screens/register/index.js';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/components/Splash';
import Dashboard from './src/screens/dashboard/index';

import {store} from './redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Dashboard} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
