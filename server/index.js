const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));

app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});