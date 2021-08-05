import React, { FC } from 'react';
import { TaskState } from '../../store/todoReducer';
import { Task } from '../../types';
import { Button } from '../core/button';
import { TaskFilterWrapper } from './styles';
interface FilterProps {
  tasks?: Task[];
  onFilter(selectedFilter: TaskState['filterBy']): void;
}

const Filter: FC<FilterProps> = ({ tasks = [], onFilter = () => null }) => {
  const doneTasks = tasks?.filter((t) => t.done);
  const pendingTasks = tasks?.filter((t) => !t.done);

  return (
    <TaskFilterWrapper>
      <Button
        transparent
        aria-label="all-items"
        onClick={() => onFilter('all')}
      >
        <strong>All: {tasks?.length || 0}</strong>
      </Button>
      <Button
        transparent
        aria-label="done-items"
        onClick={() => onFilter('done')}
      >
        <strong>Done: {doneTasks?.length || 0}</strong>
      </Button>
      <Button
        transparent
        aria-label="pending-items"
        onClick={() => onFilter('pending')}
      >
        <strong>Pending: {pendingTasks?.length || 0}</strong>
      </Button>
    </TaskFilterWrapper>
  );
};

export default Filter;
