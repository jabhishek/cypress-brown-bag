const express = require('express');
const path = require('path');
const STORES = require('./MOCK_STORES');

const app = express();
const PORT = 5000;

const publicPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(publicPath));

app.get('/api/search/:query', (req, res) => {
  const filtered =
    STORES.filter((store) => {
      return store.name.toLowerCase().includes(req.params.query.toLowerCase());
    }) || [];

  res.send(filtered);
});

app.get('/api/store/all', (req, res) => {
  res.send(STORES);
});

app.get('/api/store/:code', (req, res) => {
  const searchCode = req.params.code;

  const foundStore = STORES.find((store) => {
    return store.code === searchCode;
  });
  if (!foundStore) {
    res.status(404).send('Not found');
  } else {
    res.send(foundStore);
  }
});

app.use('*', function (req, res) {
  res.sendFile(publicPath + '/index.html');
});

// Serve the files on port 3000.
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});
