var mongoose = require('mongoose');
var model = mongoose.model('Template');
const api = {};

api.lista = function (req, res) {
  model
    .find()
    .then(
    fotos => res.json(fotos),
    error => {
      console.log(error);
      res.sendStatus(500);
    });
};

api.buscaPorId = function (req, res) {
  model
    .findById(req.params.id)
    .then(
    foto => {
      if (!foto) throw new Error('Foto não encontrada');
      res.json(foto);
    },
    error => {
      console.log(error);
      res.sendStatus(500);
    });

};

api.removePorId = function (req, res) {
  model.remove({ '_id': req.params.id })
    .then(() => {
      res.sendStatus(200);
    },
    error => {
      console.log(error);
      res.sendStatus(500);
    });

};

api.adiciona = function (req, res) {
  model.create(req.body)
    .then(
    foto => res.json(foto),
    error => {
      console.log(error);
      res.sendStatus(500);
    });
};

api.atualiza = function (req, res) {
  model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(
    foto => {
      res.json(foto);
    },
    error => {
      console.log(error);
      res.sendStatus(500);
    });
};




module.exports = api;
