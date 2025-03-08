// ++++++++  core syntax commands
console.log ("Msg1");
console.log ("Msg2");
alert("msg1");
//++++++++++  variables
var a=1;
console.log(a); // old version

let b = 2;
const c = 3; // without init
b = 5; // initialization, переприсвоїли значення b 
console.log(b)
console.log(c); // 5 3

let user;
user = "newClient";
console.log(user);

// +++++++++   naming conventions
// +++++++++   data types

const age = 37;
const height = 1.8; // єдиний тип даних - number;
const notANumber = NaN; // хибні обчислення, помилка обчислень
const bigNum = 1000000000000n;

const UserName1 = "Vlad";

const escapes = 'Hello " Vlad "  How are you? \n New line';
console.log(escapes);

const isValid = false;

const activeUser = null;
const emptyUser = undefined;

const item = {
    id:3,
    height:1.45,
    description: "Valeriia"
};
console.log(item);

// ++++++++++++   check data type
console.log(age)
console.log(height)
console.log(notANumber)
console.log(bigNum)
console.log(UserName1)

console.log(typeof activeUser) // object
console.log(typeof emptyUser)


// +++++++++++  weak/dynamic typing

let person = 1;
person = "Stepan";
person = true;
console.log("person type:", typeof person);  // boolean







































/* Task 1. Напишіть програму мовою JavaScript, яка перетворює вхідне числове 
значення в стрінгу, яка містить відповідну кількість годин і хвилин.
Приклад роботи:
inputValue = 82;
result: 1:22.




Task 2. Напишіть програму мовою JavaScript, яка пропонує юзеру ввести два числових значення (використати prompt()).
Розрахувати суму, різницю, добуток і частку введених значень та вивести отримані результати.
У випадку, якщо різниця вийшла від’ємною – результат потрібно перетворити в додатній.

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
8 kratne 2 & 4!

Task 6*. Напишіть програму на JavaScript, яка приймає число від користувача і перевіряє, чи є це число простим. Простим є таке число, яке більше за 1 і ділиться без остачі тільки на себе і 1. Програма повинна вивести відповідне повідомлення, чи є число простим, чи ні.
Приклад роботи для числа 4:
4 is not a prime number.
Приклад роботи для числа 7:
7 is a prime number. */