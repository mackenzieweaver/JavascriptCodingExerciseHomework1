﻿// Calculations
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
function FizzBuzz(fizz, buzz) {
    for (let i = 1; i <= 100; i++) {
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
    let reverse = word.split('').reverse().join('');
    if (word == reverse) {
        e.innerHTML = `<b>Palindrome!</b>`;
    } else {
        e.innerHTML = `<b>Not a palindrome...</b>`;
    }
}