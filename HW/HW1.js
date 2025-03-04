/* 

Task 3. Заданий такий код:
let x = 1;
let y = 2;

let res1 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"
let res2 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

Task 4. Написати умовну конструкцію, яка в залежності від значення набраного балу по 100-бальній шкалі, виводитиме відповідний результат. Зробити 2-ма різними способами через 2 різних умовних оператора.
Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied!”
Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!”


Task 5. Напишіть програму на JavaScript, яка ітерується цілими числами від 1 до 50.
Для числа, кратного двом потрібно додатково виводити " kratne 2!".
Для числа, кратного чотирьом потрібно додатково виводити " kratne 4!".
Для чисел, кратних двом і чотирьом, виведіть " kratne 2 & 4!".
Приклад роботи для перших 8-ми чисел діапазону:

1
2 kratne 2!
3
4 kratne 2 & 4!
5
6 kratne 2!
7
8 kratne 2 & 4! */

/* Task 1. Напишіть програму мовою JavaScript, яка перетворює вхідне числове значення в стрінгу, 
яка містить відповідну кількість годин і хвилин.
Приклад роботи:
inputValue = 82;
result: 1:22 */

function convertString(inputValue) {
    let hours = Math.floor(inputValue / 60);
    let minutes = inputValue % 60;
    return `${hours}:${minutes}`;
}

// Example usage:
let inputValue = 82;
let result = convertString(inputValue);
console.log(inputValue); // "82"
console.log(result);

/* Task 2. Напишіть програму мовою JavaScript, яка пропонує юзеру ввести два числових значення (використати prompt()).
Розрахувати суму, різницю, добуток і частку введених значень та вивести отримані результати.
У випадку, якщо різниця вийшла від’ємною – результат потрібно перетворити в додатній. */

function calculateOperations() {
    let a = parseFloat(prompt("Введіть перше число:"));
    let b = parseFloat(prompt("Введіть друге число:"));

    if (isNaN(a) || isNaN(b)) {
        alert("Будь ласка, введіть коректні числові значення!");
        return;
    }

    let sum = a + b;
    let difference = a - b; // No need for Math.abs unless required
    let product = a * b;
    let quotient = b !== 0 ? (a / b).toFixed(2) : "Ділення на нуль неможливе";

    // Log results to the console
    console.log(`Сума: ${sum}`);
    console.log(`Різниця: ${difference}`);
    console.log(`Добуток: ${product}`);
    console.log(`Частка: ${quotient}`);

    // Show results via alert
    alert(`Результати:
    Сума: ${sum}
    Різниця: ${difference}
    Добуток: ${product}
    Частка: ${quotient}`);
}

// Run the function
calculateOperations();