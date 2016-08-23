define([], function(){

  'use strict';
  // Generic Method for Form validations
  function checkValidations (rootElement) {
    var f, field, formValid = true;
      for (f = 0; f < rootElement.elements.length; f++) {
        field = rootElement.elements[f];
        if ( field.nodeName !== "INPUT" && field.nodeName !== "TEXTAREA" && field.nodeName !== "SELECT" ) continue;
        if ( typeof field.willValidate !== "undefined" ) {
          if (field.nodeName === "INPUT" && field.type !== field.getAttribute("type")) {
          } else {
            field.classList.remove("error");
            if( !field.checkValidity() ) {
              field.classList.add("error");
              formValid = false;
            }
          }
        }	else {

       }
      }
      return formValid;
  }
  return {
  validateForm: function( event ) {
    event.preventDefault();
    console.log('ecent');
    event = event ? event : window.event;
    var form = event.target ? event.target : event.srcElement;
    var isFormValid = checkValidations ( form );

  },
  resetForm: function () {
    var form = document.getElementById('cake-form');
    for (var f = 0; f < form.elements.length; f++) {
      var field = form.elements[f];
      field.classList.remove("error");
    }
    form.reset();
  }
};
});
