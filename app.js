require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('welcome to /!');
});

app.listen(PORT, () => {
  console.log('Example app is listening on port', PORT);
});
