var casper = require('casper');
describe('app load', function() {
  before(function(){
    casper.start('http://localhost:8000');
  });
  it("should load cake-form",function(){
    casper.waitForSelector('#cake-form', function() {
			'#cake-form'.should.be.inDOM;
		});
  })
})
