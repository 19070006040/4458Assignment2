const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());

app.get('/service-b', (req, res) => {
  res.send('Response from Service B');
});

app.listen(PORT, () => {
  console.log(`Service B is listening on port ${PORT}`);
});
