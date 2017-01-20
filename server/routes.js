module.exports = function(app) {

  app.route('*')
    .get(function(req, res) {
      res.render('index.html', {
        title       : '优视窗-yweb',
        keywords    : '优视窗,yweb',
        description : '优视窗'
      });
    });
};
