import React, { createContext, useState, useContext, useRef } from 'react'

const TaskContext = createContext()

export function useTask() {
    const context = useContext(TaskContext)

    const { task, setTask, key, setKey, inputRef } = context

    return { task, setTask, key, setKey, inputRef }
}

export default function TaskProvider({ children }) {
    const [task, setTask] = useState('')
    const [key, setKey] = useState('')

    const inputRef = useRef(null)
    
    return (
        <TaskContext.Provider value={{
            task,
            setTask,
            key,
            setKey,
            inputRef
        }}>
            {children}
        </TaskContext.Provider>
    )
}