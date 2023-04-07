const express = require('express');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://admin:4jbgHOsBCECLb5pc@letsbowl.doak51m.mongodb.net/test';
const dbName = 'users';
const bodyParser = require('body-parser');

const app = express();

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  // do something with the email and password data
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = {
    email,
    password: hashedPassword
  };
  res.send('Thanks for signing up!');
});

app.post('/login', (req, res) => {
  // Handle user registration logic here
  const { email, password } = req.body;
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});


MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Failed to connect to the database');
  } else {
    console.log('Connected to the database');
    const db = client.db(dbName);

    // TODO: define routes and middleware
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});

const uri = 'mongodb+srv://admin:4jbgHOsBCECLb5pc@letsbowl.doak51m.mongodb.net/test';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("socialclub").collection("users");
  // perform actions on the collection object
  client.close();
});  

// const newDocument = { username: "John Doe", password: "LL0921jj" };
// collection.insertOne(newDocument, (err, res) => {
//   if (err) throw err;
//   console.log("1 document inserted");
//   client.close();
// });  
