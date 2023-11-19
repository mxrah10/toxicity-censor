var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
  });    
});

var config = {characterData: true, subtree: true};

document.querySelectorAll('input[type="text"], textarea, [contenteditable=true]').forEach(element => {
  element.addEventListener('input', parse);
  observer.observe(element, config);
});

document.querySelectorAll('[data-text]').forEach(element => {
  observer.observe(element, config);
})
  
function parse(e) {
  console.log("parse fired")
  const currentInput = e.target.value;
  var innerHTML = e.target.innerHTML;
  console.log(innerHTML)
  var index = innerHTML.indexOf("fuck");
  if (index >= 0) {
    console.log("detected word")
    innerHTML = innerHTML.substring(0,index) + "<span class='highlight' style='background-color: yellow;'>" + innerHTML.substring(index,index+"fuck".length) + "</span>" + innerHTML.substring(index + "fuck".length);
    e.currentTarget.innerHTML = innerHTML;
  }
}

function highlight(innerHTML, text) {
  //var innerHTML = e.currentTarget.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
    console.log("detected word")
    innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
    e.currentTarget.innerHTML = innerHTML;
  }
}