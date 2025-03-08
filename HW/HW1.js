/* Task 1. Напишіть програму мовою JavaScript, яка перетворює вхідне числове значення в стрінгу, 
яка містить відповідну кількість годин і хвилин.
Приклад роботи:
inputValue = 82;
result: 1:22 */

const minutesInHour = 60;
let userInput;

// input minutes
userInput = prompt("Please input minutes you'd like to convert to hours.");
let userInputAsInt = parseInt(userInput);

// if user input is a number and not a string then convert to hours
if (!isNaN(userInputAsInt)) {
    // calculate hours
    let hours = parseInt(userInputAsInt / minutesInHour);

    // calculate minutes
    let minutes = userInputAsInt % minutesInHour;

    // concatenate and display
    let resultInHours = `${hours}:${minutes}`;
    alert(`input value = ${userInput}, result: ${resultInHours}`);
}

// if user entered anything but a number let them know
else {
    alert("Accept the rules! Give me a number!");
}

/* Task 2. Напишіть програму мовою JavaScript, яка пропонує юзеру ввести два числових значення (використати prompt()).
Розрахувати суму, різницю, добуток і частку введених значень та вивести отримані результати.
У випадку, якщо різниця вийшла від’ємною – результат потрібно перетворити в додатній. */

let a = parseFloat(prompt("Введіть перше число:"));
let b = parseFloat(prompt("Введіть друге число:"));

let sum = a + b;
let difference = Math.abs(a - b); // конвертувати в додатнє
let product = a * b;
let quotient = b !== 0 ? a / b : "Ділення на нуль неможливе";

// Show results via alert
alert(`Результати:
    Сума: ${sum}
    Різниця: ${difference}
    Добуток: ${product}
    Частка: ${quotient}`);

/* Task 3. Заданий такий код:
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

Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.*/

let x = 1;
let y = 2;

let res1 = "" + x + y; // Concatenation as a string -> converts numbers to strings and concatenates "1" + "2" = "12".
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x < y) + "" + y; // Boolean conversion and concatenation
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y; // Boolean conversion
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = "text" / "text"
console.log(res4); // NaN
console.log(typeof res4); // "number"

/* Task 4. Написати умовну конструкцію, яка в залежності від значення набраного балу по 100-бальній шкалі, виводитиме відповідний результат. Зробити 2-ма різними способами через 2 різних умовних оператора.
Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied!”
Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!” */

let score = parseInt(prompt("Введіть набраний бал (0-100):"));

if (score >= 0 && score <= 49) {
    console.log("Unsatisfied!");
} else if (score >= 50 && score <= 70) {
    console.log("Satisfied!");
} else if (score >= 71 && score <= 87) {
    console.log("Good!");
} else if (score >= 88 && score <= 100) {
    console.log("Excellent!");
} else {
    console.log("Incorrect assessment!!");
}


let mark = parseInt(prompt("Enter any digit from 0-100"));
switch (true) {
    case (mark >=0 && mark <= 49):
        console.log("Unsatisfied");
        break;
    case (mark >= 50 && mark <= 70):
        console.log("Satisfied");
        break;
    case (mark >= 71 && mark <= 87):
        console.log("Good");
        break;
    case (mark >= 88 && mark <= 100):
        console.log("Excellent");
        break;
    default:
        console.log("Incorrect assessment!");
}

/* Task 5. Напишіть програму на JavaScript, яка ітерується цілими числами від 1 до 50.
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

for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0) {
        console.log(i + " kratne 2 & 4!");
    } else if (i % 2 === 0) {
        console.log(i + " kratne 2!");
    } else {
        console.log(i);
    }
}