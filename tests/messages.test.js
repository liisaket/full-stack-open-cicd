
require('regenerator-runtime/runtime')
const request = require('supertest')
const app = require('../server')

describe('Messages API', () => {
  test('GET /api/messages returns status 200', async () => {
    const response = await request(app).get('/messages')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([])
  })
})
