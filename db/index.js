const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy' ,{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => console.log('mongoose is connected'));
