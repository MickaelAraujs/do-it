import React from 'react'
import { StatusBar } from 'react-native'

import TaskProvider from './src/contexts/task'

import Main from './src/components/Main'

console.disableYellowBox = true

export default function App() {

  return (
    <TaskProvider>
      <StatusBar barStyle='light-content' backgroundColor='#23262C' />
      
      <Main />
    </TaskProvider>
  )
}