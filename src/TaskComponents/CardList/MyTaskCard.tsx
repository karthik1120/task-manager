import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import './Cardlist.css';
import { Pencil, Trash2 } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';
import ModalComponent from '../ModalComponent/ModalComponent';
import { useState } from 'react';

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

const MyTaskCard = ({ task, setTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [individualTask, setIndividualTask] = useState({});
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-8">
        {task.map((recipe) => (
          <Card
            key={recipe.id}
            className="flex flex-col justify-between custom-card-component transition-all hover:scale-105">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant={'outline'}
                size={'icon'}
                onClick={() => {
                  setShowModal(true);
                  setIndividualTask(recipe);
                }}>
                <Pencil />
              </Button>
              <Button variant={'outline'} size={'icon'}>
                <Trash2 />
              </Button>
            </CardFooter>
          </Card>
        ))}
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
  );
};

export default MyTaskCard;
