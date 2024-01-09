import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './home.style';
import Constants from 'expo-constants';
import Images from '../../../assets/images/images';

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const addTask = async (task) => {
    const newTask = {
      id: tasks.length + 1,
      task: task
    }
    AsyncStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    setText('')
    getTasks();
  }

  const getTasks = async () => {
    const tasks = await AsyncStorage.getItem('tasks')
    if (!tasks) return;
    setTasks(JSON.parse(tasks))
  }

  const deleteTask = async (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    getTasks();
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
      }}>ToDo App</Text>
      <View style={styles.inputContainer}>
        <TextInput value={text}
          onChangeText={(text) => {
            setText(text)
          }} style={styles.textInput} placeholder='Enter task'></TextInput>
        <View>
          <Text onPress={() => {
            addTask(text)
          }} style={styles.addButton}>Add Task</Text>
        </View>
      </View>
      <View>
        {
          tasks.map(task => {
            return (
              <View key={task.id} style={styles.taskContainer}>
                <Text>{task.task}</Text>
                <TouchableOpacity onPress={() => {
                  deleteTask(task.id)
                }}>
                  <Image source={Images.deleteIcon} style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default Home
