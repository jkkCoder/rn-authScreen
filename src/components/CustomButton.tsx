import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton = ({text, onPress}: CustomButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CustomButton;
