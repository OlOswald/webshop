var homeView = function (req, res, next) {
  res.render('homeView', {title: 'ADMIN Bereich'});
};

module.exports = {homeView};