const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: `Hello Stefan!`,
  });
});

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`,
  });
});

sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`);
  })
