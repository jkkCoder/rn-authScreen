import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {todos} from '../../data/todos';
import Todo from '../../components/Todo';
import {logoutUser} from '../../../redux/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogoutPress = () => {
    dispatch(logoutUser());
    navigation.replace('Login');
  };

  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.name}>{user.user.username}</Text>
        <Pressable style={styles.container} onPress={() => onLogoutPress()}>
          <Text style={styles.text}>Logout</Text>
        </Pressable>
      </View>

      {/* rendering all todos */}
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo todo={item} />}
        keyExtractor={todo => todo.id}
      />
    </View>
  );
};

export default Dashboard;
