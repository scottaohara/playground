// these'll be used a bit
const doc = document;
const w = window;

/**
 * invoke an instance of SpeechRecognition
 * We’re including both prefixed and non-prefixed objects,
 * because Chrome currently supports the API with prefixed properties.
*/
const SpeechRecognition = w.SpeechRecognition || w.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const socket = io(); // init socket.io

// where to put speeching
const outputYou = doc.querySelector('.output--you');
const outputBot = doc.querySelector('.output--bot');

// setup speech recognition
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlernatives = 5;

// reference the button that will initiate speech recognition
doc.getElementById('init_speech').addEventListener('click', () => {
  recognition.start();
});

// test for speech
recognition.addEventListener('speechstart', () => {
  console.log('speech detected');
});

// use result event to retrieve what was said as text.
// this will return a SpeechRecognitionResultList object
// which will contain the result, and the text will be
// retrievable from an array.
recognition.addEventListener('result', (e) => {
  console.log('result detected');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  outputYou.textContent = text;

  console.log('Confidence: ' + e.results[0][0].confidence);

  // emit text via socket.io
  socket.emit('chat message', text);
});


recognition.addEventListener('speeechend', () => {
  recognition.stop();
});


recognition.addEventListener('error', ( e ) => {
  outputBot.textContent = 'Error: ' + e.error;
});

function synthVoice( text ) {
  const synth = w.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}

socket.on('bot reply', function ( replyText ) {
  synthVoice( replyText );

  if ( replyText == '' ) replyText = '(No answer...)';
  outputBot.textContent = replyText;
});
