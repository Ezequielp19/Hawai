const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

async function conectarDB() {
        await mongoose.connect(process.env.DB_MONGO)
        .then(()=>console.log('DB Conectada'))
        .catch((error)=>console.log('Error: ' + error))
}

module.exports = conectarDB