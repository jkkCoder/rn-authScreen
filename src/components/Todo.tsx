import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TodoProps {
  todo: {
    id: string;
    todo: string;
  };
}

const Todo = ({todo}: TodoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    margin: 20,
    padding: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Todo;
