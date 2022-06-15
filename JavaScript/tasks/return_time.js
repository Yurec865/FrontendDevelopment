function getTimeFromMinutes(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "Ошибка, проверьте данные";
    } 

    const hour = num / 60 ^ 0,
        minute = num % 60;

    let endingWord = "";
    const lastDigit = hour % 10;
    if (lastDigit === 0 || lastDigit > 4) {
        endingWord = "ов";
    } else if (lastDigit === 1) {
        endingWord = "";
    } else if (lastDigit <= 4) {
        endingWord = "а";
    } 

    const time = `Это ${hour} час${endingWord} и ${minute} минут`;
    
    return time;
}

console.log(getTimeFromMinutes(60));