const express = require('express')
const app = express()

const port = process.env.port || 3000;

process.title = 'my_lovely_app';

app.use(express.static('public'));

app.listen(port, function () {
  console.log('App listening on port ' + port);
})
