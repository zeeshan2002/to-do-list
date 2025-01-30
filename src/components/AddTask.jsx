import React from 'react'
import {useState} from 'react'

function AddTask ({onAdd}) {

    const [text, setText] = useState('')

   
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim()){
        onAdd(text)
        setText('')
      }
    }
    return (
     <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Task Manager</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center border-b border-gray-300 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-2 px-4 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter task"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <button 
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Add Task
          </button>
        </div>
      </form>
     </div>
    )
}

export default AddTask