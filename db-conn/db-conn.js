const {Client} = require('pg');

async function stam() {
    const client = new Client({
        connectionString: 'postgres://@10.1.1.240:5432/checkpoint'
    });
    try {
        await client.connect();
    } catch(err) {
    }
    
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res);
        client.end();
    })
}

stam();