const express = require('express');
const PORT = 1234;

const app = express();

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
})