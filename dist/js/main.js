(function() {
  'use strict'
  var buttonStart = document.querySelector(".js-startPlay"),
      checkboxPlay = document.getElementById("checkPlay");
  
  function disableButton() {
    buttonStart.classList.toggle("is-disabled");
  }

  checkboxPlay.addEventListener("click", disableButton);

})();
