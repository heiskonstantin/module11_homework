// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
// Используйте setInterval.

function counter(a, b) {
  let startNumber = a;
  const i = setInterval(() => {
    console.log(startNumber);
    if (startNumber === b) clearInterval(i);
    ++startNumber;
  }, 1000);
}

counter(3, 19);
