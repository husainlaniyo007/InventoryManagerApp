const request = require('supertest');
const app = require('../backend/server');
const db = require('../database/config');

beforeAll(async () => {
    await db.query('TRUNCATE TABLE items RESTART IDENTITY CASCADE');
});

describe('Items API', () => {
    it('should create a new item', async () => {
        const res = await request(app)
            .post('/api/items')
            .send({
                name: 'Item 1',
                description: 'Description of Item 1',
                quantity: 10
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should fetch all items', async () => {
        const res = await request(app).get('/api/items');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    });

    it('should fetch a single item', async () => {
        const res = await request(app).get('/api/items/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });

    it('should update an item', async () => {
        const res = await request(app)
            .put('/api/items/1')
            .send({
                name: 'Updated Item 1',
                description: 'Updated Description of Item 1',
                quantity: 20
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toEqual('Updated Item 1');
    });

    it('should delete an item', async () => {
        const res = await request(app).delete('/api/items/1');
        expect(res.statusCode).toEqual(204);
    });
});

