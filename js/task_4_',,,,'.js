// Задание 4
// Напиши функцию formatString(string) которая
// принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов,
// функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция 
// обрезает строку до 40 - ка символов и добавляет 
// в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function(string) {
    if (string.length <= 40) {
        console.log(string)
    } else {
        console.log(string.slice(0, 40), '...')
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка 39

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка 49

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка 24

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка 63