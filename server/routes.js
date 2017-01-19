export default (app)=> {

  app.route('*')
    .get((req, res)=> {
      res.render('index.ejs', {});
    });
};
