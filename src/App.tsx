import './App.css';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Plus, X } from 'lucide-react';
import MyTaskCard from './TaskComponents/CardList/MyTaskCard';
import { Fragment, useState } from 'react';
import ModalComponent from './TaskComponents/ModalComponent/ModalComponent';
import { Dialog, DialogTrigger } from './components/ui/dialog';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="outline-container-wrapper">
      <div className="grid place-items-center font-extrabold text-3xl pt-8 pb-2">Task manager</div>
      <div className="flex items-center capitalize header-card-container-wrapper mb-7">
        <div className="w-11/12 text-2xl font-bold"> total tasks: 0</div>
        <div className="w-11/12 text-2xl font-bold">completed tasks: 0</div>
      </div>{' '}
      <section className="mb-10">
        <div className="text-lg font-medium mb-5">Filter by:</div>
        <div className="flex justify-between gap-5">
          <div className="flex">
            <Input
              placeholder="Search by title"
              type="text"
              suffix={<X className="absolute right-2" size={20} color="#bec6d1" />}
            />
            <Button className="ml-8" variant={'secondary'}>
              Task Status: Completed
            </Button>
          </div>
          <ModalComponent />
        </div>
      </section>
      <MyTaskCard />
    </div>
  );
}

export default App;
