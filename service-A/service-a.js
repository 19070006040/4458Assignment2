const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/service-a', (req, res) => {
  res.send('Response from Service A');
});

app.listen(PORT, () => {
  console.log(`Service A is listening on port ${PORT}`);
});
