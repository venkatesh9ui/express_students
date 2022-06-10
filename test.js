const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('Hello Node!!');
});

app.listen(8080, () => 'Listening 8080');
