document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
            if (buttonText === '=') {
                calculate();
            } else if (buttonText === 'AC') {
                inputBox.value = '';
            } else if (buttonText === 'DEL') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (buttonText === '√') {
                inputBox.value += '√';
            } else {
                inputBox.value += buttonText;
            }
        });
    });

    function calculate() {
        try {
            let expression = inputBox.value;
            // If the expression starts with '√', replace it with 'Math.sqrt(' to evaluate
            if (expression.startsWith('√')) {
                expression = expression.replace(/√(\d+)/, 'Math.sqrt($1)');
            }
            const result = eval(expression);
            inputBox.value = result;
        } catch (error) {
            inputBox.value = 'Error';
        }
    }
});