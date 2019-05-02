const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/home', express.static(__dirname + '/../client/dist'));
app.use('/about', express.static(__dirname + '/../client/dist'));
app.use('/us', express.static(__dirname + '/../client/dist'));
app.use('/team', express.static(__dirname + '/../client/dist'));
app.use('/services', express.static(__dirname + '/../client/dist'));
app.use('/blog', express.static(__dirname + '/../client/dist'));
app.use('/listings', express.static(__dirname + '/../client/dist'));
app.use('/contact', express.static(__dirname + '/../client/dist'));
app.use('/individualblog', express.static(__dirname + '/../client/dist'));

app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});