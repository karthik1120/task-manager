import * as z from 'zod';

export const TaskManagerSchema = z.object({
  // title, description, due date, priority (low, medium, high), and status (completed, pending)
  title: z.string().min(6, { message: 'please enter valid title' }),
  description: z.string().min(20, { message: 'please enter valid description with minimum 20 character' }),
  dueDate: z.string().min(1, { message: 'please enter' }),
  priority: z.string().min(1, {
    message: 'Please select any one priority.',
  }),
  status: z.string().min(1, {
    message: 'Please select any one status',
  }),
});
