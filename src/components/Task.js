import React from 'react'
import { TaskListContext } from '../context/TaskListContext'

function Task({task}) {
    const {removeTask, findItem} = useContext(TaskListContext)

    return (
        <div>
            <ul>
                <li className="list-item">
                    <span>{task.title}</span>
                    <div>
                        <button className="btn-delete task-btn" onClick={() => removeTask(task.id)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>{' '}
                        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                            <i className="fas fa-pen"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Task
