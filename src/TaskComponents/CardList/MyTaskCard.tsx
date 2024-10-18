import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import './Cardlist.css'
import { Pencil, Trash2 } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'
import ModalComponent from '../ModalComponent/ModalComponent'
import { useState } from 'react'

interface TaskData {
  title: string
  image: string
  time: number
  description: string
  vegan: boolean
  id: string
}

const MyTaskCard = ({ task, setTask }) => {
  const [showModal, setShowModal] = useState(false)
  const [individualTask, setIndividualTask] = useState({})

  return (
    <Fragment>
      <div className="grid grid-row-column-container gap-8">
        {task.map(taskData => {
          const getDate = new Date(taskData.dueDate).toISOString().slice(0, 10)
          return (
            <Card
              key={taskData.id}
              className="grid rounded-xl border bg-card text-card-foreground shadow custom-card-component transition-all hover:scale-105"
            >
              <CardTitle className="font-bold text-xl py-5 px-6 capitalize">
                {taskData.title}
                <CardDescription>Due Date: {getDate}</CardDescription>
              </CardTitle>

              <CardContent className="text-sm overflow-hidden break-words">
                {taskData.description.length > 250
                  ? taskData.description.slice(0, 200) + '...'
                  : taskData.description}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge
                  variant={
                    taskData.status === 'inprogress' ? 'secondary' : 'outline'
                  }
                  className={
                    taskData.status === 'completed'
                      ? 'bg-green-500'
                      : 'bg-slate-400'
                  }
                  style={{ color: 'white', border: 'none' }}
                >
                  {taskData.status}
                </Badge>

                <div>
                  <Button
                    variant={'outline'}
                    size={'icon'}
                    onClick={() => {
                      setShowModal(true)
                      setIndividualTask(taskData)
                    }}
                    className="mr-4"
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant={'outline'}
                    size={'icon'}
                    onClick={() => {
                      const updateTask = task.filter(i => i.id !== taskData.id)
                      setTask(updateTask)
                    }}
                    className="bg-red-500"
                  >
                    <Trash2 size={22} color="white" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        setTask={setTask}
        type={'edit'}
        individualTask={individualTask}
        setIndividualTask={setIndividualTask}
        task={task}
      />
    </Fragment>
  )
}

export default MyTaskCard
