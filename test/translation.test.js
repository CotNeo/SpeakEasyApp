const request = require('supertest');
const app = require('../app');

describe('Translation Routes', () => {
  it('should translate text', async () => {
    const res = await request(app)
      .post('/translate')
      .send({
        text: 'Hello, how are you?',
        targetLanguage: 'fr',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('translatedText');
  });
});