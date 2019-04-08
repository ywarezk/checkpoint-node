const {Client} = require('pg');

async function stam() {
    const client = new Client({
        connectionString: 'postgresql://academeez:academeez@academeez.cdzuu6yao14b.eu-west-1.rds.amazonaws.com:5432/academeez'
    });
    try {
        await client.connect();
    } catch(err) {
        debugger;
    }
    
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res);
        client.end();
    })
}

stam();