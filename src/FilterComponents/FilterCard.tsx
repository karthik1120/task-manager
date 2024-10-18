import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ModalComponent from '@/TaskComponents/ModalComponent/ModalComponent'
interface TaskInterface {
  title: string
  description: string
  dueDate?: string | object
  priority: string
  status: string
}
interface FilterCardProps {
  showModal: boolean
  setShowModal: (show: boolean) => boolean
  tasks: TaskInterface[] // You can replace 'any' with a more specific type for tasks
  setTask: (tasks: TaskInterface[]) => TaskInterface[] // Adjust as needed based on your task structure
  isCompleted: boolean
  setIsCompleted: (isCompleted: boolean) => boolean
  searchInput: string
  setSearchInput: (input: string) => string
}
const FilterCard: React.FC<FilterCardProps> = ({
  showModal,
  setShowModal,
  tasks,
  setTask,
  isCompleted,
  setIsCompleted,
  searchInput,
  setSearchInput,
}) => {
  return (
    <section className="mb-10">
      <div className="text-lg font-medium mb-5">Filter by:</div>
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="flex flex-wrap">
          <Input
            placeholder="Search by title"
            type="text"
            suffix={
              <X
                onClick={() => setSearchInput('')}
                className="absolute right-2 top-2 cursor-pointer"
                size={20}
                color="#bec6d1"
              />
            }
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <Button
            style={
              isCompleted
                ? {
                    outline: 'bordered',
                    backgroundColor: '#16a34a',
                    color: 'white',
                  }
                : { outline: 'none' }
            }
            className="ml-8 border-none"
            variant={'secondary'}
            onClick={() => setIsCompleted((prev: boolean) => !prev)}
          >
            Status: Completed
          </Button>
        </div>
        <ModalComponent
          showModal={showModal}
          setShowModal={setShowModal}
          task={tasks}
          setTask={setTask}
        />
      </div>
    </section>
  )
}

export default FilterCard
