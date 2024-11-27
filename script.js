function solveFunction() {
    const question = document.getElementById('questions').value;
    const input = document.getElementById('input').value.trim();
    const resultElement = document.getElementById('result');
    let result = '';

    try {
        switch (question) {
            case 'sumUpToNumber':
                result = sumUpToNumber(parseInt(input));
                break;
            case 'largestOfThree':
                result = largestOfThree(...input.split(',').map(Number));
                break;
            case 'checkPalindrome':
                result = checkPalindrome(parseInt(input));
                break;
            case 'factorial':
                result = factorial(parseInt(input));
                break;
            case 'countVowels':
                result = countVowels(input);
                break;
            case 'fibonacci':
                result = fibonacci(parseInt(input)).join(', ');
                break;
            case 'isPrime':
                result = isPrime(parseInt(input));
                break;
            case 'sumArray':
                result = sumArray(input.split(',').map(Number));
                break;
            case 'filterPositive':
                result = filterPositive(input.split(',').map(Number)).join(', ');
                break;
            case 'sumOfDigits':
                result = sumOfDigits(parseInt(input));
                break;
            case 'capitalizeWords':
                result = capitalizeWords(input);
                break;
            case 'countDigits':
                result = countDigits(parseInt(input));
                break;
            case 'isArmstrong':
                result = isArmstrong(parseInt(input));
                break;
            default:
                result = 'Invalid question selected';
        }
    } catch (error) {
        result = 'Error: Please check your input.';
    }

    resultElement.textContent = `Result: ${result}`;
}

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
function sumUpToNumber(num) {
    return (num * (num + 1)) / 2;
}

// Write a function that takes three numbers and returns the largest of them.
function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}


//Write a function to check if a given number is a palindrome (a word that reads the same backward).
function checkPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// Write a function that returns the factorial of a given number.
function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
}

//Write a function that counts the number of vowels in a given string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

// Write a function to generate the Fibonacci sequence up to n terms.
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// Write a function that checks if a number is prime.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Write a function that takes an array of numbers and returns the sum of its elements.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Write a function that filters an array to include only positive numbers
function filterPositive(arr) {
    return arr.filter(num => num > 0);
}

// Write a function to calculate the sum of digits of a given number.
function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Write a function that capitalizes the first letter of every word in a given sentence.
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Write a function to return number of digits in given number
function countDigits(num) {
    return num.toString().length;
}

// Write a function to check whether given number is armstrong or not
function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((total, digit) => total + Math.pow(parseInt(digit), power), 0);
    return sum === num  ? 'Yes, it\'s an Armstrong number.' : 'No, it\'s not an Armstrong number.';
}