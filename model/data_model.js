const mongoose = require ('mongoose');
const db = require('../controller/database_mongoose');

var schemaTable = new mongoose.Schema();
schemaTable = {
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
};
module.exports  = db.model('post', schemaTable, 'intro_form');
// var schemaTable = mongoose.model('intro_form', schemaTable);