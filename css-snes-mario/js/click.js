$(document).ready(function() {

  $('.js-btn').click(function() {
    $('#bg').removeClass();
    $('#mario').removeClass();
    $('#bullet').removeClass();
    $('#shell').removeClass();
    $('#shell-Holder').removeClass();
    $('#shell-Holder2').removeClass();
    $('#mario-Holder').removeClass();
    return false;
  });

  $('.nob').click(function()
    $('#bg').addClass('reset');
  });

  $('#btn-A').click(function() {
    $('#mario').addClass('spin-Jump');
  });
   $('#btn-B').click(function() {
    $('#mario').addClass('jump');
  });
   $('#btn-X').click(function() {
    $('#mario').addClass('twirl');
  });
   $('#btn-Y').click(function() {
    $('#mario').addClass('kick');
    $('#shell-Holder').addClass('dropDown');
    $('#shell-Holder2').addClass('shoot');
    $('#shell').addClass('gogo');
  });

   $('#btn-U').click(function() {
    $('#mario').addClass('look-Up');
  });
   $('#btn-D').click(function() {
    $('#mario').addClass('crouch');
  });
   $('#btn-L').click(function() {
    $('#mario').addClass('run-Left');
    $('#mario-Holder').addClass('move-Left');
  });
   $('#btn-R').click(function() {
    $('#mario').addClass('run-Right');
    $('#mario-Holder').addClass('move-Right');
  });

   $('#btn-TL').click(function() {
    $('#mario').addClass('fly');
    $('#mario-Holder').addClass('fly-Move');
  });
   $('#btn-TR').click(function() {
    $('#mario').addClass('dance');
  });

   $('#btn-Sel').click(function() {
    $('#mario').addClass('die');
    $('#mario-Holder').addClass('die');
    $('#bullet').addClass('bang');
  });

   $('#btn-Str').click(function() {
    $('#mario').addClass('peace');
  });

});
