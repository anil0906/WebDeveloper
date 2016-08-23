( function() {
  function toggleText(evt) {
    var tellUsText = document.getElementById("tell-us");
    if (evt.target.value === "Others") {
      tellUsText.disabled = false;
      tellUsText.focus();
    }
    else {
      tellUsText.disabled = true;
      tellUsText.value = '';
    }
  }
  function resetForm() {
  document.getElementById('cake-form').reset();
  }
  /*****Add event handlers****/
  ( function() {
    var resetButton = document.getElementById("reset");
    resetButton.onclick = resetForm;
    var radios = document.getElementsByName("celeb-type");
    var i=0;
    while( i < radios.length ) {
      radios[i].onchange = toggleText;
      i++;
    }
  })();
})();
