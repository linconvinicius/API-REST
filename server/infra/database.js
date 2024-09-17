const pgp = require('pg-promise')();
const db = pgp ({
    user: 'postgres',
    password: 'HE2402',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = db;