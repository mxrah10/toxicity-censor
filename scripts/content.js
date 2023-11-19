document.querySelectorAll('input[type="text"], textarea').forEach(element => {
  element.addEventListener('input', parse);
});

document.querySelectorAll('[data-text]').forEach(element => {
  element.addEventListener('change', parse);
})
  
function parse(e) {
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