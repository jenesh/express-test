const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

const globalMiddleWare = (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
}

app.use(globalMiddleWare);

const middleWare = (req, res) => {
    res.send('Hello World')
}

app.get('/', middleWare);

app.get('/about', (req, res) => {
    res.send('About US')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(port, () => {
    console.log(`Port: 8000`);
})