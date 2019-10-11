const express = require('express');
const morgan = require('morgan');
const PORT = 1234;

const app = express();

app.use(morgan());
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/checkout/:productId/details', (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
})