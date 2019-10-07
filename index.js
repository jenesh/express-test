const express = require('express');
const cors = require('cors');

console.log(cors);

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8000;

const sum = (num1, num2) => parseInt(num1) + parseInt(num2);
const sub = (num1, num2) => parseInt(num1) - parseInt(num2)
const mul = (num1, num2) => parseInt(num1) * parseInt(num2)
const div = (num1, num2) => parseInt(num1) / parseInt(num2)

app.get('/add/:num1/:num2', (req, res) => {
    const answer = sum(req.params.num1, req.params.num2);
    res.json({
        answer
    });
})

app.get('/sub/:num1/:num2', (req, res) => {
    const answer = sub(req.params.num1, req.params.num2);
    res.json({
        answer
    });
})

app.get('/mul/:num1/:num2', (req, res) => {
    const answer = mul(req.params.num1, req.params.num2);
    res.json({
        answer
    });
})

app.get('/div/:num1/:num2', (req, res) => {
    const answer = div(req.params.num1, req.params.num2);
    res.json({
        answer
    });
})

app.listen(port, () => {
    console.log(`Live at http//:localhost:8000`);
})