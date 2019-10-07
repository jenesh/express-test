// const axios = require('axios');

const port = 8000;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', makeApiCall);
})

const makeApiCall = async () => {
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const operand = document.querySelector('select').selectedOptions[0].value;

    // console.log(num1, num2, operand);
    // console.log(`http//:localhost:${port}/${operand}/${num1}/${num2}`);

    const data = await axios.get(`http://localhost:${port}/${operand}/${num1}/${num2}`)
    document.querySelector('#answer').innerText = `${data.data.answer}`;
}
