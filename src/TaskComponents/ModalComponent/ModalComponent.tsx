import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import CreateTask from './CreateTask';
import { useState } from 'react';

function ModalComponent({ showModal, setShowModal, task, setTask, type, individualTask, setIndividualTask }) {
  return (
    <Dialog
      open={showModal}
      onOpenChange={(val) => {
        setShowModal(val);
        setIndividualTask({});
      }}>
      <DialogTrigger asChild>
        <Button className="bg-blue-400">
          <Plus />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{type == 'edit' ? 'Edit' : 'Create'} Task</DialogTitle>
        </DialogHeader>
        <div>
          <CreateTask
            setOpenModal={setShowModal}
            setTask={setTask}
            edit={type == 'edit' ? true : false}
            individualTask={individualTask}
            task={task}
          />
        </div>
        {/* <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary">
            submit
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

export default ModalComponent;
