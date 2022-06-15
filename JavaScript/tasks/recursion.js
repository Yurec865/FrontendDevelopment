"use scrict";

function factorial(num, n) {
    if(typeof(num) !== 'number' || !Number.isInteger(num)) {
        return "You entered not number";
    } else if(num === 0 || num < 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));