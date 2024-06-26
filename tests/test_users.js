const request = require('supertest');
const app = require('../backend/server');
const db = require('../database/config');

beforeAll(async () => {
    await db.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
});

describe('Users API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                username: 'user1',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should fetch all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    });

    it('should fetch a single user', async () => {
        const res = await request(app).get('/api/users/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });

    it('should update a user', async () => {
        const res = await request(app)
            .put('/api/users/1')
            .send({
                username: 'updatedUser1',
                password: 'newpassword123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body.username).toEqual('updatedUser1');
    });

    it('should delete a user', async () => {
        const res = await request(app).delete('/api/users/1');
        expect(res.statusCode).toEqual(204);
    });
});

