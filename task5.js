// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.

// Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.

const getSquareNumber = (a, b) => {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    !isNaN(a) &&
    !isNaN(b)
  ) {
    console.log(Math.pow(a, b));
  } else {
    console.log("data is not numbers");
  }
};
getSquareNumber(3, 3);
