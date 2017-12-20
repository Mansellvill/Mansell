const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

var citiesJSON = fs.readFileSync('cities.json', 'utf8');
var cities = JSON.parse(citiesJSON);


var promis = new Promise((resolve, reject) => {
  cities.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  resolve(cities);
})


app.get('/cities', function (req, res) {
  promis.then(() => res.send(cities));
})




const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});

