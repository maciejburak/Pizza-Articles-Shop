const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/product.routes.js');
const orderRoutes = require('./routes/order.routes.js');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')
const dbURL = 'mongodb+srv://maciej-burak:reactShopApp2021@cluster0.pgf2k.mongodb.net/db?retryWrites=true&w=majority';

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'shhh!',
  store: MongoStore.create({mongoUrl: dbURL}),
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', dataRoutes);
app.use('/api', orderRoutes);

app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
//'mongodb://localhost:27017/ShopDB'

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', (err) => console.log('Error: ' + err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
