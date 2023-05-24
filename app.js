require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const data_model = require('./model/data_model.js');
// const cors = require('cors');
// const data_model = require('./model/triuminfo');
// const mongoose = require('mongoose');

const app = express();

// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.port || 2500;

let text = `<p>Here is a quote from WWF's website:<br></p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
“Experience is the name everyone gives to their mistakes.” – Oscar Wilde
<br><br>
“ In order to be irreplaceable, one must always be different” – Coco Chanel
<br><br>
“Quantum computing will change the existence of Interpreted languages” -Manish K
</blockquote>`

app.get('/', function(req, res){
  res.send(text);
})
/*
const MONGODB_URI = 'mongodb://localhost:27017/datasource';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}
mongoose.connect(MONGODB_URI, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var schemaTable = new mongoose.Schema();
var schemaTable = {
  'app_name': String,
  'app_phone': Number,
  'app_mail': String,
  'c_name_app': String,
  'app_addr_1': String,
  'app_addr_2': String,
  'app_addr_3': Number,
  'P_code': String,
  'Quantity': String,
  'dist_name': String,
  'dist_phone': Number,
  'tc_check': String,
  'submit': String
}
var triuminfo = db.model('post', schemaTable, 'intro_form');
*/
app.get('/api/datasource', (req, res) => {
  try{
    var articles = data_model.find({});
    // res.send(articles);
    console.log(articles);
  } catch(err){
    console.error(err);
  }
});

app.get('/api/datainsert', async (req, res) => {
 try{
      var formDetails = new data_model({
        app_name: req.query.app_name,
        app_phone: req.query.app_phone,
        app_mail: req.query.app_mail,
        c_name_app: req.query.c_name_app,
        app_addr_1: req.query.app_addr_1,
        app_addr_2: req.query.app_addr_2,
        app_addr_3: req.query.app_addr_3,
        P_code: req.query.P_code,
        Quantity: req.query.Quantity,
        dist_name: req.query.dist_name,
        dist_phone: req.query.dist_phone,
        tc_check: req.query.tc_check
      })
      formDetails.save();
    await res.send(req.query);
  } catch(err){
    console.error(err);
  }
});

app.listen(port, (req,res)=>{
  console.log("Connected at http://127.0.0.1:"+(process.env.port || port));
});