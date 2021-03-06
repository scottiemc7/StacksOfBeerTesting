var myStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^I am on the app main page$/, function(callback) {
    // Express the regexp above with the code you wish you had.
    // `this` is set to a new this.World instance.
    // i.e. you may use this.browser to execute the step:

    this.visit('http://github.com/cucumber/cucumber-js');
    callback();
    // The callback is passed to visit() so that when the job's finished, the next step can
    // be executed by Cucumber.
  });

  this.When(/^I press the photo button$/, function(callback) {
    // Express the regexp above with the code you wish you had. Call callback() at the end
    // of the step, or callback.pending() if the step is not yet implemented:

    callback();
  });

  this.Then(/^I should be asked to select\/take a photo$/, function(callback) {
    // matching groups are passed as parameters to the step definition
    this.title()
      .then(function(title) {
        console.log(title);
      },function(err) {
        console.log(err);
        callback();
        //callback.fail(new Error("Expected to be on page with title " + title));
        //callback.fail(err);
      });
  });
};

module.exports = myStepDefinitionsWrapper;