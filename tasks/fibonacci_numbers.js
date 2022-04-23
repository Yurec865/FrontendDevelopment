function fib(number) {
    if (typeof(number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < number; i++) {
        if (i + 1 === number) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(14));