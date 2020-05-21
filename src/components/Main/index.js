import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import firebase from '../../config/firebase'
import { useTask } from '../../contexts/task'

import ToDo from '../ToDo'
import styles from './styles'

export default function Main() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  const [task, setTask] = useTask()

  useEffect(() => {
    async function loadTasks() {
      await firebase.database().ref('tasks').on('value', snapshot => {
        setTasks([])

        snapshot.forEach(item => {
          const data = {
            task: item.val().task,
            key: item.key
          }

          setTasks(oldArray => [...oldArray, data])
        })

        setLoading(false)
      })
    }

    loadTasks()
  }, [])

  async function handleNewTask() {
    if (task.length <= 0) return;

    const tasks = await firebase.database().ref('tasks')
    const key = tasks.push().key

    tasks.child(key).set({ task })

    setTask('')
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>DO IT!</Text>

        <View style={styles.toDoContainer}>
          <TextInput
          style={styles.toDoInput}
          placeholder='O que você precisa fazer hoje?'
          underlineColorAndroid='transparent'
          value={task}
          onChangeText={text => setTask(text)}
          />

          <TouchableOpacity
          style={styles.toDoButton}
          onPress={handleNewTask}
          >
            <MaterialIcons name='add' size={26} color='#ffffff' />
          </TouchableOpacity>
        </View>

        { loading ? (
          <ActivityIndicator
          style={styles.loading}
          color='#2973E2'
          size={45}
          />
        ) : (
          <FlatList
          style={{ marginTop: 20 }}
          data={tasks}
          keyExtractor={item => String(item.key)}
          renderItem={({ item }) => <ToDo data={item} />}
          showsVerticalScrollIndicator={false}
          />
        ) }
    </View>
  )
}