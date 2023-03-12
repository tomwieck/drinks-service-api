import request from 'supertest';
import { app } from '../app';

describe('Test coffee API endpoint request', () => {
  test('GET /coffeelover should return correct message', async () => {
    const res = await request(app).get('/coffeelover');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('I like coffee!');
  });
});

test('GET /coffee should return correct object', async () => {
  const res = await request(app)
  .get('/coffee')
  .query({ coffeeName: 'Latte' });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: 'Coffee',
    name: 'Latte',
  });
});