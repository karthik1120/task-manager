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

function ModalComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-400">
          <Plus />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <div>
          <CreateTask />
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary">
            submit
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalComponent;
