// Query for textareas
chrome.storage.local.get('enabled', function(data) {
    if (!data.enabled) {
      return; 
    }
    var textareaFound = false;
    document.querySelectorAll('input[type="text"], textarea, [contenteditable=true]').forEach(element => {
    textareaFound = true;
    console.log("There is an element " + element.className);
    element.addEventListener('input', parse);
    });

    function parse(e) {
    console.log("parse fired");
    const currentInput = e.target.value;
    showPopup(currentInput);
    console.log(currentInput);
    }

    // Query for spans (reddit, twitter)
    if (!textareaFound) {
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach((mutation) => {
        console.log("subtree changed");
        console.log(mutation.target);
        //showPopup(mutation.target.wholeText);
        showPopup(mutation.target.wholeText);
        });
    });
    var config = { childList: true, subtree: true, characterData: true };

    setTimeout(() => {
        queryPoll();
    }, 1000)

    function queryPoll() {
        var found = false;
        console.log("poll");
        document.querySelectorAll('[data-text], [data-lexical-text]').forEach(element => {
        found = true;
        console.log("There is an element " + element.className);
        element.addEventListener('keyup', parse);
        observer.observe(element, config);
        })
        setTimeout(() => {
        queryPoll();
        }, 1000)
    }
    }

    // highlight text given html
    function highlight(innerHTML, badWord) {
        var innerHTML = e.currentTarget.innerHTML;
        var index = innerHTML.indexOf(badWord);
        if (index >= 0) {
            console.log("detected word")
            innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + badWord.length) + "</span>" + innerHTML.substring(index + badWord.length);
            e.currentTarget.innerHTML = innerHTML;
        }
    }

    // show the popup
    function showPopup(text) {
        var hasPopup = document.getElementsByClassName('detoxify-popup');
        
        setPrompt(text);
        API_Text = CallAPI(); 
        
        if (API_Text != null){
            parseUninclusive(API_Text); // Creates an array of uninclusive words called UninclusiveArray[]
        }

        for (let words = 0; words < UninclusiveArray; words++) {
            highlight(text, UninclusiveArray[words])
        }

        if (hasPopup.length > 0) {
            document.getElementById('detoxify-content').innerHTML = text;
        } else {
            document.body.insertAdjacentHTML('beforeend', `
            <div class="detoxify-popup">
                <p class="detoxify-title">DETOXIFY</p>
                <span id="detoxify-content">` + text + `</span>
            </div>
            `);
        }
    }
});