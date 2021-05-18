import React, {createContext, useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || []

    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    

    const [editTem, setEditTem] = useState(null)

    //Add Tasks
    const addTask = title => {
        setTasks([...tasks, {title, id: uuid()}])
    }

    //remove task
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    //Clear Tasks
    const clearList = () => {
        setTasks([])
    }

    //find task
    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    //edit task
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? {title, id} : task))

        console.log(newTasks)

        setTasks(newTasks)
        setEditItem(null)
    }

    
    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
          >
              {props.children}  
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
