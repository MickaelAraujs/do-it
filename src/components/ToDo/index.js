import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import firebase from '../../config/firebase'
import { useTask } from '../../contexts/task'
import styles from './styles'

export default function ToDo({ data }) {
  const { setTask, inputRef, setKey } = useTask()
  
  async function handleDelete() {
    await firebase.database().ref('tasks').child(data.key).remove()
  }

  async function handleEdit() {
    await firebase.database().ref('tasks').child(data.key).once('value', snapshot => {
      const { task } = snapshot.val()

      setTask(task)
      inputRef.current.focus()
      setKey(snapshot.key)
    })
  }

  return (
    <TouchableOpacity
    onPress={handleEdit}
    >
      <View style={styles.toDo} >
        <View style={styles.ToDoTextContainer}>
            <MaterialIcons name='check-box' size={26} color='#2973E2' />

            <Text style={styles.toDoText}>{data.task}</Text>
        </View>

        <TouchableOpacity
        onPress={handleDelete}
        >
          <MaterialIcons name='delete' size={26} color='#2973E2'/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}