const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('Public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    const {
        num1,
        num2
    } = req.body;
    const result = Number(num1) + Number(num2);
    res.send('The result is ' + result);
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    const {
        weight,
        height
    } = req.body;
    weight === "" || weight === " " && height === "" || height === " " ? 
    res.send('either weight or height field cannot be empty') :
     res.send(`Your Bmi is ${Math.floor(parseFloat(weight) / (parseFloat(height) * parseFloat(height)))}`);
})

app.listen(3000, _ => console.log('server started on port 3000'));