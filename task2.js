// Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function primeNumber(num) {
  let result = `it is a prime number`;
  if (num > 1000) {
    result = `number is not correct`;
  } else if (num === 0 || num === 1) {
    result = `number is ${num}`;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        result = `composite number`;
        break;
      }
    }
  }
  return result;
}

console.log(primeNumber(19));
