document.querySelectorAll('input[type="text"], textarea').forEach(element => {
    element.addEventListener('input', function(event) {
      const currentInput = event.target.value;
      alert("Please remember to inhibit your emotions, we think you might be saying something negative or toxic.")
    });
  });
  