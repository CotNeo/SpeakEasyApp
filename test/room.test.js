const request = require('supertest');
const app = require('../app');

describe('Room Routes', () => {
  it('should create a new room', async () => {
    const res = await request(app)
      .post('/room/create')
      .send({ name: 'Test Room' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test Room');
  });

  it('should join an existing room', async () => {
    const roomId = '60fbbf5f2d5f4c38dc34fbbe'; // Örnek oda ID'si
    const res = await request(app).get(`/room/join/${roomId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', roomId);
  });
});