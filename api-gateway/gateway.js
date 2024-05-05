const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const PORT = 3000;

const serviceAProxy = httpProxy.createProxyServer({ target: 'http://localhost:3001' });
const serviceBProxy = httpProxy.createProxyServer({ target: 'http://localhost:3002' });

app.all('/service-a/*', (req, res) => {
  serviceAProxy.web(req, res);
});

app.all('/service-b/*', (req, res) => {
  serviceBProxy.web(req, res);
});

app.listen(PORT, () => {
  console.log(`API Gateway is listening on port ${PORT}`);
});
