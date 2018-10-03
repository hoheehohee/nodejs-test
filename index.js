const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors')
const path = require('path');
const routes = require('./routes/router');
const slackBots = require('./services/SlackBots');
const app = express();
const port = 3002;

app.set('dbconnecter', path.join(__dirname, 'dbconnecter'));
app.use(cors());
app.use(methodOverride()); // 추가 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, (error) => {
  if(error) console.log('##### error: ', error)
  console.log('Example app listening on port: ' + port);
});
