document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
  
    // Initialize button state
    chrome.storage.local.get('enabled', function(data) {
      toggleButton.textContent = data.enabled ? 'Disable' : 'Enable';
    });
  
    toggleButton.addEventListener('click', function() {
      chrome.storage.local.get('enabled', function(data) {
        var currentState = data.enabled;
        chrome.storage.local.set({'enabled': !currentState}, function() {
          toggleButton.textContent = currentState ? 'Enable' : 'Disable';
        });
      });
    });
  });
  