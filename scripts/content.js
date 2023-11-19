document.querySelectorAll('input[type="text"], textarea, [contenteditable=true]').forEach(element => {
  console.log("There is an element " + element.className);
  element.addEventListener('input', parse);
});

let observer = new MutationObserver(callback);
function callback (mutations) {
  console.log("mutation")
}
let options = {
  childList: true,
  subtree: true
};

setTimeout(() => {
  console.log("load")
  document.querySelectorAll('[data-text], [data-lexical-text]').forEach(element => {
    console.log("There is an element " + element.className);
    element.addEventListener('keyup', parse);
    observer.observe(element, options);
  })
}, 4000)

function parse(e) {
  console.log("parse fired")
  showPopup(e)
  const currentInput = e.target.value;
  console.log(currentInput)
}

function highlight(innerHTML, text) {
  var innerHTML = e.currentTarget.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
    console.log("detected word")
    innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
    e.currentTarget.innerHTML = innerHTML;
  }
}

function showPopup(e) {
  var hasPopup = document.getElementsByClassName('detoxify-popup');
  if (hasPopup.length > 0) {
    document.getElementById('detoxify-content').innerHTML = e.target.value;
  } else {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="detoxify-popup">
        <p class="detoxify-title">DETOXIFY</p>
        <span id="detoxify-content">` + e.target.value + `</span>
      </div>
    `);
  }
}