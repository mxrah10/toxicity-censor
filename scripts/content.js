document.querySelectorAll('input[type="text"], textarea, [contenteditable=true]').forEach(element => {
  element.addEventListener('input', parse);
});

document.querySelectorAll('[data-text]').forEach(element => {
})

function parse(e) {
  console.log("parse fired")
  showPopup(e)
  const currentInput = e.target.value;
  var innerHTML = e.target.innerHTML;
  console.log(innerHTML)
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

}