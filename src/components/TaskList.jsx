import React from 'react'

function TaskList({tasks, onToggle, onDelete}) {
return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-md min-h-screen">
        <ul className="list-none space-y-3">
            {tasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between p-3 bg-white rounded-md shadow">
                    <div className="flex items-center space-x-2">
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggle(task.id)}
                            className="form-checkbox h-5 w-5 text-green-500"
                        />
                        <span style={{color: task.completed ? 'gray' : 'black'}} className="text-base">
                            {task.text}
                        </span>
                    </div>
                    <button 
                        onClick={() => onDelete(task.id)} 
                        className="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500 transition duration-200"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default TaskList