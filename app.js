require(['js/form'],function( form ){
  function toggleText(evt) {
    var tellUsText = document.getElementById("tell-us");
    if (evt.target.value === "Others") {
      tellUsText.disabled = false;
      tellUsText.required = true;
      tellUsText.focus();
    }
    else {
      tellUsText.required = false;
      tellUsText.disabled = true;
      tellUsText.value = '';
    }
  }
   /*****Add event handlers****/
  ( function() {
    // Reset Button
    var resetButton = document.getElementById("reset");
    resetButton.onclick = form.resetForm;
    // Radio button
    var radios = document.getElementsByName("celeb-type");
    var i=0;
    while( i < radios.length ) {
      radios[i].onchange = toggleText;
      i++;
    }
   // Submit button
    var submitForm = document.getElementById("cake-form");
    submitForm.onsubmit = form.validateForm;
  })();
});
