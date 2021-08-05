/**
 * @jest-environment jsdom
 */

import tasks from '../__mocks__/todoMock';
global.fetch = jest.fn((url: string, options) => {
  // console.log({ url, options });

  if (url.match('http://localhost:9001/task/update/2'))
    return Promise.resolve({
      status: 204,
    });

  if (url === process.env.API_PATH + '/task/create')
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          done: false,
          title: 'Drink milk',
          description: 'Everyday',
          id: tasks.length,
        }),
    });

  if (url === process.env.API_PATH + '/tasks')
    return Promise.resolve({
      json: () => Promise.resolve({ tasks }),
    });
});
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';

beforeEach(() => {
  // if you have an existing `beforeEach` just add the following line to it
  // fetchMock.doMock();
  process.env = { ...process.env, API_PATH: 'http://localhost:8080' }; // Make a copy
});

test('Checks intiial rendering', async () => {
  const { render, page } = await getPage({ route: '/' });

  render();

  await waitFor(async () => {
    const a = await screen.getByText('Todo App');
    expect(a.innerHTML).toBe('Todo App');

    expect(1).toBe(1);
  });
});

test('Should register an item successfully', async () => {
  const { render, page } = await getPage({ route: '/' });

  render();
  await waitFor(async () => {
    const title = screen.getByLabelText('title');
    const description = screen.getByLabelText('description');
    const confirm = screen.getByLabelText('confirm');

    fireEvent.change(title, { target: { value: 'Drink milk' } });
    fireEvent.change(description, { target: { value: 'Everyday' } });
    fireEvent.click(confirm);
  });

  await waitFor(async () => {
    const pendingItems = screen.getByLabelText('pending-items');

    // console.log(pendingItems.querySelector('strong'))
    expect(
      (pendingItems.querySelector('strong') as HTMLSpanElement).innerHTML
    ).toBe('Pending: 11');
  });
});

test('Should trigger an update', async () => {
  const { render, page } = await getPage({ route: '/' });

  render();

  await waitFor(async () => {
    const buttonDone = screen.getAllByLabelText('button-done');
    fireEvent.click(buttonDone[1]);
  });
});

test('Should trigger an deletion', async () => {
  const { render, page } = await getPage({ route: '/' });

  render();

  await waitFor(async () => {
    const buttonDone = screen.getAllByLabelText('button-delete');
    fireEvent.click(buttonDone[1]);
  });
});
