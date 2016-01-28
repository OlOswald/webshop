var homeView = function (req, res, next) {
  res.render('homeView', {title: 'IBS Oldenburg'});
};

module.exports = {homeView};