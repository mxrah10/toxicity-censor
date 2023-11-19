document.querySelectorAll('input[type="text"], textarea').forEach(element => {
  element.addEventListener('input', parse);
});

document.querySelectorAll('[data-text]').forEach(element => {
  element.addEventListener('change', parse);
})
  
function parse(e) {
  const currentInput = e.target.value;
  highlight(currentInput, "fuck")
  console.log(currentInput);
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