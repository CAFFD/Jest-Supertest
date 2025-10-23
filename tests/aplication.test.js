const request = require('supertest');
const app = require('../aplication');

describe('Aritmetic APIs', () => {
  test('GET /add', async () => {
    const res = await request(app).get('/add').query({ num1: 2, num2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 5);
  });

  test('Get /sub', async () => {
    const res = await request(app).get('/sub').query({ num1: 5, num2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 2);
  });

  test('GET /mult', async () => {
    const res = await request(app).get('/mult').query({ num1: 5, num2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 10);
  });

  test('GET /div', async () => {
    const res = await request(app).get('/div').query({ num1: 6, num2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 3);
  });

  test('GET /div by zero', async () => {
    const res = await request(app).get('/div').query({ num1: 6, num2: 0 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', null);
  });

  test('handles missing or invalid numbers gracefully', async () => {
    const res = await request(app).get('/add');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 0);
  });
});
