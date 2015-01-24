var urls = require('./app/enums/urlConstants').urls;

module.exports = function (app) {
  var mainController = require('./app/controllers/mainController');
  app.get(urls.WEB.HOME_PAGE, mainController.getHome);
  app.get(urls.WEB.PARTIAL_PAGE, mainController.getPartial);

  var testController = require('./app/controllers/testController');
  app.get(urls.TEST.HOME_PAGE, testController.index);
  app.get(urls.TEST.CHECK_API, testController.list);
};