const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.get('/first', (req, res) => {
  setTimeout(() => res.send(), 2000);
});

app.get('/second', (req, res) => {
  setTimeout(() => res.send(), 2350);
});

app.get('/third', (req, res) => {
  setTimeout(() => res.send(), 2700);
});

app.listen(3000);
