// Requirements
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pug = require('pug');

const app = express();
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

// Routes
// Get Day
app.get('/api/days/:day', (req, res) => {
  const { day } = req.params;
  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  };

  const numDay = daysOfWeek[day];
  if (numDay !== undefined) {
    res.status(200).send(numDay.toString());
  }
  res.status(400).send(`'${day}' is not a valid day!`);
});

// Concat arrays
app.post('/api/concat/', (req, res) => {
  const { array1 } = req.body;
  const { array2 } = req.body;
  console.log(array1 instanceof Array);
  if (!(array1 instanceof Array)) {
    res.status(400).send({"error": "Input data should be of type Array."});
  } else if (!(array2 instanceof Array)) {
    res.status(400).send({"error": "Input data should be of type Array."});
  }

  res.send({ "result": array1.concat(array2) });
});

// Starting the server
let server = app.listen(app.get('port'), () => console.log('listening to port ' + app.get('port')))
