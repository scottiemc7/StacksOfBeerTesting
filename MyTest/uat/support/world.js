  var protractor = require('protractor');
  var webdriver = require('selenium-webdriver');
  var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

  var World = function World(callback) {
    this.browser = protractor.wrapDriver(driver); // this.browser will be available in step definitions

    this.visit = function (url) {
      this.browser.get(url);
    };

    this.title = function() {
      return this.browser.getTitle();
    }

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
  };

exports.World = World;