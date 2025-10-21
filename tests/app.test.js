const request = require('supertest');
const app = require('../aplication');

describe('GET /add', () => {
  test('returns sum of two query numbers as JSON', async () => {
    const res = await request(app).get('/add').query({ num1: 2, num2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 5);
  });

  test('handles missing or invalid numbers gracefully', async () => {
    const res = await request(app).get('/add');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 0);
  });
});
