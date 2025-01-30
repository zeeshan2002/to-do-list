import React, {useState} from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'



function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    const new_task = {id: Date.now(), text, completed: false}
    setTasks([...tasks, new_task])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id ===id ? {...task, completed: !task.completed} : task)
    )
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const filteredTasks = tasks.filter((task) => {
    if(filter === 'completed') return task.completed;
    if(filter === 'incomplete') return !task.completed;
    return true;
  })

  return (
    <>
      <div className="min-h-screen bg-cover bg-center flex flex-col items-center py-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
          <div className="mb-4">
            <AddTask onAdd={addTask} />
          </div>
          <div className="flex justify-around mb-6">
            <button 
              className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button 
              className={`px-4 py-2 rounded ${filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => setFilter('incomplete')}
            >
              Incomplete
            </button>
          </div>
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>    
    </>
  )
}


export default App
