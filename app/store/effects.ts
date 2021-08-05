import { API_PATH } from '../constants';
import { Task } from '../types';

export const _getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${API_PATH}/tasks` as string, {
    method: 'GET',
  });
  const json = await response.json();

  return await json.tasks;
};

export const _getTask = async (id: Task['id']) => {
  const response = await fetch(`${API_PATH}/task/${id}` as string, {
    method: 'GET',
  });
  return await response.json();
};

export const _addTask = async (payload: {
  title: string;
  description: string;
}) => {
  const response = await fetch(`${API_PATH}/task/create` as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};

export const _editTask = async (payload: Task) => {
  const response = await fetch(
    `${API_PATH}/task/update/${payload.id}` as string,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  if (response.status === 204) return payload;
};

export const _deleteTask = async (payload: Task['id']) => {
  const response = await fetch(`${API_PATH}/task/delete/${payload}` as string, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: '{}',
  });

  if (response.status === 204) return payload;
};
