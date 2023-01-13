import React, { useState } from 'react'
import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';
import SplashIcon from '../../assets/splash2.json'
import { StackNavigationProp } from '@react-navigation/stack';
import {  ParamListBase, useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:"orange"}}>
      <LottieView
        source={SplashIcon}
        autoPlay
        loop={false}
        onAnimationFinish={()=>{
          navigation.replace("Login")
        }}
      />
    </View>
   
  );
}

export default Splash