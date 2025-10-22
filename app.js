// app.js
const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, name: 'Tarea 1', completed: false },
  { id: 2, name: 'Tarea 2', completed: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, name: req.body.name, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
