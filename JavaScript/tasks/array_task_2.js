"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return "Ошибка!";
    }
    return str.split("").reverse().join("");
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const currencieses = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.lenght < 0) {
        return "Нет доступных валют";
    }
    const result = arr.filter(element => {
        return element !== missingCurr;
    });

    return `Доступные валюты:\n${result.join('\n')}`;
}

console.log(availableCurr(['UAN', 'RUB', 'CNY'], 'RUB'));