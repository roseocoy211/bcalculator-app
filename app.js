document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number.');
        return; 
    }
    document.getElementById('result').value = num1 + num2;
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('calculator-form').reset();
});

document.getElementById('exitBtn').addEventListener('click', function() {
    alert('Exit button clicked - this would close the window in a desktop application');
    window.close()
});
