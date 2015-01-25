var titleList = require('../enums/pageTitles').titles;

exports.getHome = function (req, res) {
  res.render('index');
};

exports.getPartial = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name, {title: titleList[name]});
};