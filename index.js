// to import app express
const express = require('express');

// determine port that app will run on it 
const PORT = 5000;
// create new app for it
const app = express();
// to test app will create simple rout 
app.get('/', (req , res) => res.send('<h1> welcom for try test app nodejs  </h1>'));

//  I will define app the port that it will be run on it 
app.listen(PORT, () => console.log('app is up and running on this port : $(PORT)')) ;

