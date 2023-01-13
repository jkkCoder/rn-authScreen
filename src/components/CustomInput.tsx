import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

interface CustomInputProps {
  value: string;
  setValue: (name: string) => void;
  placeholder: string;
  secured?: boolean;
  RightIcon?: React.FC;
}

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secured,
  RightIcon,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={val => setValue(val)}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secured}
      />
      {!!RightIcon && <RightIcon />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,

    padding: 10,
    marginVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
  },
});

export default CustomInput;
