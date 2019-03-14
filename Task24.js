const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const hb = require('handlebars');
const port = 8080

const data = require('./data.json')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname ,'Public')));

app.get('/data', (req, res) => res.json(data));

app.get('/', (req, res) => {
   res.render('index',{ 'data' : data});
});


app.listen(process.env.PORT || 8080)




