const express = require('express');
const routes = require('./routes');
const db = require('./database')

const app = express()

app.use(express.json())

db.hasConnection()

app.use(routes)

app.listen(6000, () => console.log('Servidor no ar!'))