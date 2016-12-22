module.exports = (app) => {
  app.route('/index/:id')
  .get(app.api.template.funcao);
};
