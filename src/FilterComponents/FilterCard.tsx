import { SettingsIcon, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ModalComponent from '@/TaskComponents/ModalComponent/ModalComponent'
import { useDebounce } from './useDebounce'

const FilterCard = ({
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
            onClick={() => setIsCompleted(prev => !prev)}
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
