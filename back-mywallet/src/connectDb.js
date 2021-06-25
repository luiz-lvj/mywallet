import pg from 'pg';

const { Pool } = pg;

const user = "mywalletadmin";
const password = "123";
const host = 'localhost';
const port_database = 5432;
const database = 'mywallet';

const connection = new Pool({
    user,
    password,
    host,
    port_database,
    database
});

export default connection;