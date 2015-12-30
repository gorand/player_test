(function () {
  'use strict';
  var buttonStart = document.querySelector(".js-startPlay"),
    checkboxPlay = document.getElementById("checkPlay");
  
  function disableButton() {
    buttonStart.classList.toggle("is-disabled");
  }
  
  checkboxPlay.addEventListener("click", disableButton);
  
//  TODO: Try event orientationchange
//  function changeOrientation() {
//    if (screen.orientation.angle === 90) {
//      console.log("Orientation: " + screen.orientation.angle);
//    }
//  }
//  window.addEventListener("orientationchange", changeOrientation);
  
}());
