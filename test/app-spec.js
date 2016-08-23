
var casper = casper || {};
var document = document || {};
casper.test.begin( "navigating to url : http:\/\/localhost:8000\/", 23, function(test) {
    "use strict";
    casper.start('http://localhost:8000/', function() {
    //Asserts whether all the elments are present
    test.assertTitle('Cake Form','Page has correct title');
    // Name and email
    test.assertExists('form#cake-form');
    test.assertExists('input[name=name][required]');
    test.assertExists('input[name=email][required]');
    //Checkboxes

    test.assertExists('input[type=checkbox][name=cake-type]#Cupcakes');
    test.assertExists('input[type=checkbox][name=cake-type]#Cheesecakes');
    test.assertExists('input[type=checkbox][name=cake-type]#ButterCakes');
    test.assertExists('input[type=checkbox][name=cake-type]#Mudcakes');

    //Radios
    test.assertExists('input[type=radio][name=celeb-type]#Birthday');
    test.assertExists('input[type=radio][name=celeb-type]#Wedding');
    test.assertExists('input[type=radio][name=celeb-type]#Corporate');
    test.assertExists('input[type=radio][name=celeb-type]#Others');

    test.assertExists('input[disabled]#tell-us');

    // text area
    test.assertExists('textarea.form-element');

    // Submit and Restart button
    test.assertExists('button.submit-button');
    test.assertExists('div.link-button');

    //Check textbox is disabled if others is not selected
    test.assertEval(function() {
       return document.querySelector('#tell-us').getAttribute('disabled') === "";
     }, "tell us field is disabled");

    // select others radio button
    this.click('input[type=radio][name=celeb-type]#Others');

    test.assertEval(function() {
      return document.querySelector('#tell-us').getAttribute('disabled') === null;
    }, "tell us field not disabled");
    test.assertEval(function() {
      return document.querySelector('#tell-us').getAttribute('required') === "";
    }, "tell us field is required");
    // Different Radio Button selected
    this.click('input[type=radio][name=celeb-type]#Corporate');
    test.assertEval(function() {
      return document.querySelector('#tell-us').getAttribute('disabled') === "";
    }, "tell us field disabled again!!");
    test.assertEval(function() {
      return document.querySelector('#tell-us').getAttribute('required') === null;
    }, "tell us field is not required anymore");

  });

  // Reset Button Testing
  casper.then(function(){
    this.echo("name input tag value entered");
    this.sendKeys('input[name=name]','Anil');
    test.assertEval(function() {
      return document.querySelector('input[name=name]').value === 'Anil';
    }, "Name Set to correct value");
    this.echo("Reset button clicked");
    this.click('div.link-button');
    test.assertEval(function() {
      return document.querySelector('input[name=name]').value === '';
    }, "Name tag value updated correctly");
    test.done();
  });
  // Submit Button to check validation
  casper.then(function(){
    // submit button clicked
    this.echo("Submit button clicked");
    this.click('button.submit-button');
    test.assertExists('input[name=name].error');
    test.assertExists('input[name=email].error');
    test.assertExists('input[type=radio][name=celeb-type]#Birthday.error');
    test.done();
  });

  casper.run(function() {
    this.echo('So the whole suite ended.');
    this.exit();
});
});
