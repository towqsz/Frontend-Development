const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
const numbers = [];
app.get('/api/', (req, res) => res.send('Hi there'));
app.get('/api/phones/all', (req, res) => {res.send(numbers);});

app.post('/api/phones', (req, res) => {
    const number = req.body.number;
    numbers.push(number);
    res.send({"message": "phone has been added"})});


app.post('/api/phones/remove', (req, res) => {
    const number = req.body.number;
    for( let i = 0; i < numbers.length; i++){
        if ( numbers[i] === number) {
            numbers.splice(i, 1);
            i--;
        }
    }
    res.send({"message": "phone has been removed"})});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));