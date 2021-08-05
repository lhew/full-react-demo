import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';
import {
  _addTask,
  _deleteTask,
  _editTask,
  _getTask,
  _getTasks,
} from './effects';
import {
  appendTaskTransformer,
  removeTaskTransformer,
  updateTasksTransformer,
  setEditModeTransformer,
} from './utils';

export interface TaskState {
  pending: boolean;
  error?: boolean;
  tasks: Task[];
  filterBy: 'all' | 'pending' | 'done';
}

const initialState: TaskState = {
  pending: false,
  tasks: [],
  filterBy: 'all',
};

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
  return await _getTasks();
});

export const getTask = createAsyncThunk(
  'tasks/getTask',
  async (id: Task['id']) => {
    return await _getTask(id);
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (payload: { title: string; description: string }) => {
    return await _addTask(payload);
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (payload: Task) => {
    const result = await _editTask(payload);

    if (result) {
      return payload;
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (payload: Task['id']) => {
    const result = await _deleteTask(payload);
    if (result) {
      return payload;
    }
  }
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setFilter: (state, action: PayloadAction<TaskState['filterBy']>) => {
      state.filterBy = action.payload;
    },
    setEdit: (
      state,
      action: PayloadAction<{ id: Task['id']; edit: boolean }>
    ) => {
      state.tasks = setEditModeTransformer(
        action.payload.id,
        action.payload.edit,
        state.tasks
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.pending = true;
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.tasks = payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });

    builder
      .addCase(addTask.pending, (state) => {
        state.pending = true;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.tasks = payload
          ? appendTaskTransformer(payload, state.tasks)
          : state.tasks;
      })
      .addCase(addTask.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });

    builder
      .addCase(editTask.pending, (state) => {
        state.pending = true;
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.tasks = updateTasksTransformer(payload as Task, state.tasks);
      })
      .addCase(editTask.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });

    builder
      .addCase(deleteTask.pending, (state) => {
        console.log('pendente');
        state.pending = true;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        console.log({ payload });
        state.pending = false;
        state.tasks = removeTaskTransformer(payload, state.tasks);
      })
      .addCase(deleteTask.rejected, (state) => {
        console.log('deu ruim');
        state.pending = false;
        state.error = true;
      });
  },
});

export const { init, setEdit, setFilter } = taskSlice.actions;

export default taskSlice.reducer;
