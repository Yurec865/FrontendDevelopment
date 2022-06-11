//с одним аргументом
const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

//сколько угодно аргументов
const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));