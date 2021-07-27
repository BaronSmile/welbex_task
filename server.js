const express = require('express');

const data = require('./data_for_server');

const app = express();

app.get('/api/table_list', (req, res) => {
  res.json(data);
});

const port = 5000;

app.listen(port, () => console.log(`Server starter on port ${port}`));

