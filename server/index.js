const express = require('express');
const { join, resolve } = require('path');

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

const buildDir = resolve(__dirname, '../build');

app.use(express.static(buildDir));

app.get('/', function(req, res) {
  res.sendFile(join(buildDir, 'index.html'));
});

console.log(`Running server on port ${port}...`);
app.listen(port);
