var mongoose = require('mongoose');

var schema = mongoose.Schema({
  //dados do banco, exemplo:
  //titulo: {
  //  type: String,
  //  required: true
  //},
});

// compilando um modelo com base no esquema
mongoose.model('Template', schema);