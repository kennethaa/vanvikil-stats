window.addEventListener('message', receiveMessage, false);
function receiveMessage(event){
  if (event.origin !== 'https://stats.vanvikil.no') {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    var iframe = document.getElementById('vanvikil-stats'); // Or any other id they use for the iframe
    if (message.height) iframe.style.height = message.height + 'px';
  } catch (e) {}
}
