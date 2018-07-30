const express = require('express');
const uuid = require('uuid');
const path = require('path');
const routes = require('./routes/router');
const app = express();
const id = uuid.v4();
// const serialTest = require('./server/serialPortTest');
const usbControl = require('./server/usbControl');
const port = 3002;

app.set('dbconnecter', path.join(__dirname, 'dbconnecter'));
// app.use(express.static(path.join(__dirname, 'dbconnecter')));
app.use('/', routes);

app.listen(port, (error) => {
  if(error) console.log('##### error: ', error)
  console.log('Example app listening on port: ' + port);
});/*  */