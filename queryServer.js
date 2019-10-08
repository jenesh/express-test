const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

const port = 8000;

app.get('/', (req, res) => {
    const query = req.query;
    res.send(query);
})

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send(body);
})

app.listen(port, () => {
    console.log(`Live at http://localhost:${port}/`)
})