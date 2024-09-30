const express = require('express'); // importing express to use for defining middleware , routes and handling request
const bodyParser = require('body-parser'); // this is a middleware used along with express that parse http requests.
const path = require('path'); // This is used to import path 
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve your main HTML file
});

app.post('/calc', (req, res) => {

    const first_num = parseFloat(req.body.first_num);
    const second_num = parseFloat(req.body.second_num);

    const operator = req.body.operator;

    let result;

    if (operator == 'add') {
        result = first_num + second_num;
    } else if (operator === 'sub') {
        result = first_num - second_num;
    }
    console.log(`First Number: ${first_num}, Second Number: ${second_num}, Result: ${result}`);

    //res.send(`<h1> Result : ${result} </h1> <a href="/">Go Back </a>`) ;

    fs.readFile(path.join(__dirname, 'public', 'output.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading File');
        }
        const output = data.replace('{{result}}', result);
        res.send(output);
    });
  // res.send(path.join(__dirname, 'public', 'output.html'));

});





app.listen(3000, () => {
    console.log('Server Running check it out here');
});