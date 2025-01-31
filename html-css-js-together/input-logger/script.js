document.getElementById('btn').addEventListener('click', function() {
    // Get the input value
    const inputValue = document.getElementById('inpt').value;
    
    // Display the value in the <p> tag
    document.getElementById('pr').innerText = inputValue;
});