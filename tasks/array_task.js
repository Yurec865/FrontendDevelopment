"use scrict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.lenght === 0) {
        return 'Семья пуста';
    } 
    return `Семья состоит из: ${arr.join(' ')}`;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => {
        console.log(element.toLowerCase());
    });
}

standardizeStrings(favoriteCities);