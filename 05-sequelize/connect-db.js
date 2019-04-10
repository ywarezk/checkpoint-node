
// host: ip or dns
// port: 5432
// username
// password
// database name

// Database url
// engine://username:password@host:port/dbname

const databaseUrl = "postgres://@localhost:5432/checkpoint";

// connect to the running db
// manage to run a query

const { Client } = require('pg');

const client = new Client(databaseUrl);
client.connect()
    .then(() => {
        return client.query(`SELECT NOW()`)
    })
    .then((response) => {
        debugger;
    })
    .catch((err) => {
        console.log(`error: ${err.message}`);
    });
