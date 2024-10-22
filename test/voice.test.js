const request = require('supertest');
const app = require('../app');

describe('Voice Routes', () => {
  it('should synthesize speech from text', async () => {
    const res = await request(app)
      .post('/voice/synthesize')
      .send({
        text: 'Hello, how are you?',
        voiceOptions: {
          languageCode: 'en-US',
          voiceName: 'en-US-Wavenet-D',
          ssmlGender: 'NEUTRAL',
        },
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('audioContent');
  });
});