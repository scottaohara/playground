(function() {

  'use strict';

  var radios = document.querySelectorAll('.choices'),
      nextStep = document.getElementById('next');


    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
        nextStep.removeAttribute('disabled');
        nextStep.setAttribute('style', 'pointer-events: auto; opacity: 1;');
      }


      radios[i].addEventListener('click', function (){
        nextStep.removeAttribute('disabled');
        nextStep.setAttribute('style', 'pointer-events: auto; opacity: 1;');
      });
    }

})();
