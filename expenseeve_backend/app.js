const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const routes = require('./routes');

// MIDDLEWARES
app.use(cors());
app.use(express.json())
app.use('/', routes);

//MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://m_adi:Chuhiya@01@testcluster.qhma5.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('Connected to db'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})