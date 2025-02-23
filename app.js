document.getElementById('addBtn').addEventListener('click', function () {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let num1Field = document.getElementById('num1');
    let num2Field = document.getElementById('num2');

    if (isNaN(num1)) {
        alert('Error: Please enter a valid number for the first input.');
        num1Field.focus(); 
        return;
    } 
    if (isNaN(num2)) {
        alert('Error: Please enter a valid number for the second input.');
        num2Field.focus(); 
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
