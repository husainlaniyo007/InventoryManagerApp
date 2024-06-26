const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_database_user',
    host: 'localhost',
    database: 'inventory_manager',
    password: 'your_database_password',
    port: 5432,
});

module.exports = pool;
