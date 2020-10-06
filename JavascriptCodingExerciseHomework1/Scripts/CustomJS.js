// Calculations
function AddNumbers(num1, num2, num3, num4, num5) {
    const e = document.getElementById("numbers-result");
    e.innerHTML = `<b>${num1 + num2 + num3 + num4 + num5}</b>`;
}
function Least(num1, num2, num3, num4, num5) {
    const e = document.getElementById("numbers-result");
    e.innerHTML = `<b>${Math.min(num1, num2, num3, num4, num5)}</b>`;
}
function Most(num1, num2, num3, num4, num5) {
    const e = document.getElementById("numbers-result");
    e.innerHTML = `<b>${Math.max(num1, num2, num3, num4, num5)}</b>`;
}
function Average(num1, num2, num3, num4, num5) {
    const e = document.getElementById("numbers-result");
    e.innerHTML = `<b>${(num1 + num2 + num3 + num4 + num5) / 5}</b>`;
}
function Product(num1, num2, num3, num4, num5) {
    const e = document.getElementById("numbers-result");
    e.innerHTML = `<b>${num1 * num2 * num3 * num4 * num5}</b>`;
}

// Factorial 
function Factorial(num1) {
    const e = document.getElementById("factorial-result");
    let result = 1;
    for (let i = num1; i > 1; i--) {
        result *= i;
    }
    e.innerHTML = `<b>${result}</b>`;
}

// Fizz Buzz
function FizzBuzz(fizz, buzz, upperLimit) {
    for (let i = 1; i <= upperLimit; i++) {
        if ((i % fizz == 0) && (i % buzz == 0)) {
            console.log('FizzBuzz');
        } else if (i % fizz == 0) {
            console.log('Fizz');
        } else if (i % buzz == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Palindrome
function Palindrome(word) {
    const e = document.getElementById("palindrome-result");
    const r = document.getElementById("reversed-word");
    let reverse = word.split('').reverse().join('');
    r.innerHTML = `<b>${reverse}</b>`;
    if (word.toLowerCase() == reverse.toLowerCase()) {
        e.innerHTML = `<b>Palindrome!</b>`;
    } else {
        e.innerHTML = `<b>Not a palindrome...</b>`;
    }
}