const request = require('supertest');
const app = require('../backend/server');
const db = require('../database/config');

beforeAll(async () => {
    await db.query('TRUNCATE TABLE transactions RESTART IDENTITY CASCADE');
});

describe('Transactions API', () => {
    it('should create a new transaction', async () => {
        const res = await request(app)
            .post('/api/transactions')
            .send({
                itemId: 1,
                userId: 1,
                type: 'add',
                quantity: 5
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should fetch all transactions', async () => {
        const res = await request(app).get('/api/transactions');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    });

    it('should fetch a single transaction', async () => {
        const res = await request(app).get('/api/transactions/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });

    it('should update a transaction', async () => {
        const res = await request(app)
            .put('/api/transactions/1')
            .send({
                itemId: 1,
                userId: 1,
                type: 'subtract',
                quantity: 2
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body.type).toEqual('subtract');
    });

    it('should delete a transaction', async () => {
        const res = await request(app).delete('/api/transactions/1');
        expect(res.statusCode).toEqual(204);
    });
});

