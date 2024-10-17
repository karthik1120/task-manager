import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import './Cardlist.css';

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

const MyTaskCard = () => {
  const recipes = [
    {
      id: 1,
      image: 'http://localhost:4000/',
      title: 'task manager',
      time: '2014-',
      description: 'this is a task manager',
      vegan: false,
    },
    {
      id: 1,
      image: 'http://localhost:4000/',
      title: 'task manager',
      time: '2014-',
      description: 'this is a task manager',
      vegan: false,
    },
    {
      id: 1,
      image: 'http://localhost:4000/',
      title: 'task manager',
      time: '2014-',
      description: 'this is a task manager',
      vegan: false,
    },
    {
      id: 1,
      image: 'http://localhost:4000/',
      title: 'task manager',
      time: '2014-',
      description: 'this is a task manager',
      vegan: false,
    },
    {
      id: 1,
      image: 'http://localhost:4000/',
      title: 'task manager',
      time: '2014-',
      description: 'this is a task manager',
      vegan: false,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          className="flex flex-col justify-between custom-card-component transition-all hover:scale-105"
        >
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
            <Button>View Recipe</Button>
            {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MyTaskCard;
