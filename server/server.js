'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const tasksContainer = require('./tasks.json');

const MESSAGE_EMPTY_PARAMS =
  "Bad request. 'title' and 'description' Parameters can't be empty or null. Check them and try again";

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksContainer);
});

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */

app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(
      (item) => parseInt(item.id, 10) === id
    );

    if (task) {
      return res.status(200).json({
        task,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id/', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(
      (item) => parseInt(item.id, 10) === id
    );

    const { title, description, done } = req.body;

    if (
      (title && title.trim() === '') ||
      (description && description.trim() === '')
    ) {
      return res.status(400).json({
        message: MESSAGE_EMPTY_PARAMS,
      });
    }

    if (task) {
      tasksContainer.tasks = tasksContainer.tasks.map((t) =>
        parseInt(t.id, 10) === id
          ? {
              ...t,
              title,
              description,
              done: done || false,
            }
          : t
      );

      return res.status(204).send({
        message: 'Updated successfully',
      });
    } else {
      return res.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create', (req, res) => {
  const { title = '', description = '' } = req.body;

  if (title.trim() !== '' && description.trim() !== '') {
    const task = {
      id: tasksContainer.tasks.length,
      title: req.body.title,
      description: req.body.description,
    };
    tasksContainer.tasks = [task, ...tasksContainer.tasks];

    return res.status(201).json(task);
  } else {
    return res.status(400).json({
      message: MESSAGE_EMPTY_PARAMS,
    });
  }

  // tasksContainer.tasks.push(task);
});
// app.post('/task/create/:title/:description', (req, res) => {
//   const task = {
//     id: tasksContainer.tasks.length,
//     title: req.params.title,
//     description: req.params.description,
//   };

//   tasksContainer.tasks.push(task);

//   return res.status(201).json({
//     message: 'Resource created',
//   });
// });

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(
      (item) => parseInt(item.id, 10) === id
    );

    if (task) {
      tasksContainer.tasks = tasksContainer.tasks.filter(
        (_task) => _task.id !== task.id
      );
      return res.status(204).send({
        message: 'Deleted successfully',
      });
    } else {
      return res.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('The server is available on http://localhost:9001/\n');
});
