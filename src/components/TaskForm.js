import React, {useState, useEffect, useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const {addTask, clearList, editTask, editItem} = useContext(TaskListContext)
    const [title, setTitle] = useState('')
    
    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
            console.log(editItem)
        }else{
            setTitle("")
        }
    }, [editItem])


    const handleSubmit = e =>{
        e.preventDefault()
        if(!editItem){
            addTask(title)
            setTitle('')
        }else{
            editTask(title, editItem.id)
        }
    }
    
    return (
        <div>
           <form onSubmit={handleSubmit} className="form">
                <input 
                type="text"
                placeholder="Add Task..."
                value={title}
                onChange={handleChange}
                required
                className="task-input"                
                
                />
                <div className="buttons">
                    <button type="submit"
                       className="btn add-task-btn">
                           {editItem ? 'Edit Task' : 'Add Task'}
                       </button>
                    <button className="btn clear-btn" onClick={clearList}>
                        Clear    
                    </button>                
                </div>   
            </form> 
        </div>
    )
}

export default TaskForm
