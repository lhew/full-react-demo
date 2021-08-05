import { Task } from '../types';
import { TaskState } from './todoReducer';

export const appendTaskTransformer = (task: Task, taskList: Task[]) => [
  task,
  ...taskList,
];
export const removeTaskTransformer = (taskId: Task['id'], taskList: Task[]) =>
  taskList.filter((task) => task.id !== taskId);
export const updateTasksTransformer = (task: Task, taskList: Task[]) =>
  taskList.map((t) => (t.id === task.id ? task : t));
export const setEditModeTransformer = (
  taskId: Task['id'],
  editMode: boolean,
  taskList: Task[]
) =>
  taskList.map((t) => ({
    ...t,
    edit: t.id === taskId ? editMode : false,
  }));

export const filterTasks = (filter: TaskState['filterBy']) => (task: Task) => {
  switch (filter) {
    case 'all':
      return true;
    case 'done':
      return task.done === true;
    case 'pending':
      return !task.done;
    default:
      return true;
  }
};
