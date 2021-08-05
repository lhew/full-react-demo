import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainContainer from '../components/maincontainer';
import Filter from '../components/filter';
import { TodoListContainer } from '../components/todocontainer';
import TodoItem from '../components/todoitem';
import { useAppDispatch, useAppSelector } from '../hooks';
import { _getTasks } from '../store/effects';
import {
  deleteTask,
  editTask,
  init,
  setEdit,
  setFilter,
  addTask,
} from '../store/todoReducer';
import styles from '../styles/Home.module.css';
import { Task } from '../types';
import { filterTasks } from '../store/utils';

function Page({ initialState }: { initialState: Task[] }) {
  const dispatch = useAppDispatch();
  const { tasks, pending, error, filterBy } = useAppSelector(
    (state) => state.todos
  );
  const isEditing =
    useAppSelector((state) => state.todos.tasks?.filter((t) => t.edit))
      ?.length > 0;

  useEffect(() => {
    dispatch(init(initialState));
  }, []);

  return (
    <div className={styles.container}>
      <MainContainer>
        <h4>New Task</h4>

        {error && (
          <p>
            There was an error processing your request. Refresh the page and try
            again.
          </p>
        )}
        <TodoItem
          edit
          className="main-todo"
          disabled={isEditing}
          loading={pending}
          onUpdate={(payload: Task) => {
            dispatch(addTask(payload));
          }}
        />

        <Filter
          tasks={tasks}
          onFilter={(selected) => dispatch(setFilter(selected))}
        />

        <TodoListContainer>
          {tasks?.filter(filterTasks(filterBy)).map((task: Task, i) => (
            <TodoItem
              key={i}
              {...task}
              withCancel
              disabled={isEditing}
              loading={pending}
              onEdit={(edit) => {
                dispatch(setEdit({ id: task.id, edit }));
              }}
              onUpdate={(payload: Task) => {
                dispatch(editTask(payload));
              }}
              onDelete={() => {
                dispatch(deleteTask(task.id));
              }}
            />
          ))}
        </TodoListContainer>
      </MainContainer>
    </div>
  );
}

Page.getInitialProps = async () => {
  try {
    const initialState = await _getTasks();
    return { initialState };
  } catch (e) {
    return { foo: 'bar', e };
  }
};

export default Page;
