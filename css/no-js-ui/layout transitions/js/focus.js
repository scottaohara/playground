(function() {

    "use strict";

    var newBtns = document.querySelectorAll('.check-label');

    for (var i = 0; i < newBtns.length; i++) {
      newBtns[i].addEventListener('keydown', function(e) {

        if ((e.keyCode === 13) || (e.keyCode === 32)) {
           document.getElementById(e.target.getAttribute('for')).click();
        }
      });
    }

})();
