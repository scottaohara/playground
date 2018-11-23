// helper function to grab elements by id
function id(id) {
  return document.getElementById(id);
}


;(function () {

  'use strict';


  // Check to see what OS is running
  if ( navigator.appVersion.indexOf("Win")!=-1 ) {
    id('body').setAttribute('data-os', 'windows');
  }
  else if ( navigator.appVersion.indexOf("Mac")!=-1 ) {
    id('body').setAttribute('data-os', 'mac');
  }
  else if ( navigator.appVersion.indexOf("X11")!=-1 ) {
    id('body').setAttribute('data-os', 'unix');
  }
  else if ( navigator.appVersion.indexOf("Linux")!=-1 ) {
    id('body').setAttribute('data-os', 'linux');
  }
  else if ( navigator.appVersion.indexOf("android")!=-1 ) {
    id('body').setAttribute('data-os', 'android');
  }
  else {
    id('body').setAttribute('data-os', 'unknown');
  }


  // Additionally check to see if touch device
  function is_touch_device() {
    return (
             ( 'ontouchstart' in window )
             || ( navigator.MaxTouchPoints > 0 )
             || ( navigator.msMaxTouchPoints > 0 )
           );
  }

  if ( is_touch_device() ) {
    console.log('ok');
    id('body').setAttribute('data-device', 'touch');
  }
  else {
    id('body').setAttribute('data-device', 'desktop');
  }


})();
