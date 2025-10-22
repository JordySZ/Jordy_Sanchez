// tests/app.test.js
const request = require('supertest');
const app = require('../app'); // Aquí importamos la app

describe('GET /tasks', () => {
  it('should return all tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);  // Esperamos 2 tareas inicializadas
  });
});

describe('POST /tasks', () => {
  it('should create a new task', async () => {
    const newTask = { name: 'Tarea nueva' };
    const response = await request(app).post('/tasks').send(newTask);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newTask.name);
  });
});
