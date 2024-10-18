import './App.css'
import MyTaskCard from './TaskComponents/CardList/MyTaskCard'
import { useEffect, useState } from 'react'
import useLocalStorage from './TaskComponents/useLocalStorage'
import FilterCard from './FilterComponents/FilterCard'
import { useDebounce } from './FilterComponents/useDebounce'

interface TaskInterface {
  title: string
  description: string
  dueDate?: string | object
  priority: string
  status: string
}

function App() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [tasks, setTask] = useLocalStorage('taskData', [])
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState<string>('')

  const [filteredTask, setFilteredTask] = useState<TaskInterface[]>([])
  const debounceText = useDebounce(searchInput as string, 500)

  useEffect(() => {
    let updatedTask = tasks

    if (debounceText.trim().length > 0) {
      updatedTask = updatedTask.filter(i =>
        i.title.includes(debounceText.trim())
      )
      setFilteredTask(updatedTask)
    }
    if (isCompleted) {
      updatedTask = tasks.filter(
        (task: TaskInterface) => task.status === 'completed'
      )
      setFilteredTask(updatedTask)
    }
  }, [debounceText, isCompleted])

  return (
    <div className="outline-container-wrapper">
      <div className="grid place-items-center font-extrabold text-3xl pt-8 pb-2">
        Task manager
      </div>
      <div className="flex items-center capitalize header-card-container-wrapper mb-7">
        <div className="w-11/12 text-2xl font-bold">
          total tasks: {tasks.length || 0}
        </div>
        <div className="w-11/12 text-2xl font-bold">
          completed tasks:
          {tasks.filter((i: TaskInterface) => i.status === 'completed')
            .length || 0}
        </div>
      </div>
      <FilterCard
        showModal={showModal}
        setShowModal={setShowModal}
        tasks={tasks}
        setTask={setTask}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <MyTaskCard
        task={
          debounceText.trim().length > 0 || isCompleted ? filteredTask : tasks
        }
        setTask={setTask}
      />
    </div>
  )
}

export default App
