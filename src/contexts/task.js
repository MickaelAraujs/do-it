import React, { createContext, useState, useContext } from 'react'

const TaskContext = createContext()

export function useTask() {
    const { task, setTask } = useContext(TaskContext)

    return [task, setTask]
}

export default function TaskProvider({ children }) {
    const [task, setTask] = useState('')
    
    return (
        <TaskContext.Provider value={{ task, setTask }}>
            {children}
        </TaskContext.Provider>
    )
}