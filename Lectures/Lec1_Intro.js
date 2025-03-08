// ++++++++  core syntax commands
console.log("Msg1");
console.log("Msg2");
alert("msg1");
//++++++++++  variables
var a = 1;
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
    id: 3,
    height: 1.45,
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


// ---------- operators ----------
// arithmetic operators
// ${expression}

console.log(`a + b: ${5 + 3}`); // 8
console.log(`a - b: ${5 - 3}`); // 2
console.log(`a * b: ${5 * 3}`); // 15
console.log(`a / b: ${20 / 4}`); // 5
console.log(`a % b: ${23 % 7}`); // 23 / 7 = 3... = 2

// exponentiation **

console.log(`a ** b: ${2 ** 8}`); // 256
console.log(`a ** b: ${Math.pow(2, 8)}`); // 256

// logic operators
// always returns boolean type (true/false)

console.log(`a > b: ${5 > 3}`); // true
console.log(`a < b: ${5 < 3}`); // false
console.log(`a >= b: ${5 >= 3}`); // true
console.log(`a <= b: ${20 <= 20}`); // true

console.log(`Bob > Oleg: ${"Bob" > "O"}`); // false
console.log(`Bob > Bobich: ${"Bob" > "Bobich"}`); // false

// comparison
// weak - convert values to common type and check

console.log(`a == b: ${"5" == 5}`); // true
console.log(`a != b: ${"5" != 5}`); // false

// strict - compare types also

console.log(`a === b: ${"5" === 5}`); // false
console.log(`a !== b: ${"5" !== 5}`); // true

// falsy values 

console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);

const value = "false";
if (value) {
    console.log("value is true");
} else {
    console.log("valie is false");
}

let salary = 1300, bonus = 300;

console.log("Bonus:", bonus);
console.log("Salary:", salary); // 1300
console.log("Salary:", salary + 10); // 1310 
console.log("Salary:", salary); // 1300

// salary = salary + bonus;
console.log("Salary:", salary);

//  change operators: +=  -=  *=   /=   %= 

salary += bonus; //  salary = salary + bonus;
console.log("Salary:", salary);

//increment, decrement 
salary++; // adding 1
console.log("Salary:", salary);
salary--;  // subtracting 1
console.log("Salary:", salary);

// type conversion 
// to Boolean (value) !!value

let ageNew = 33;
console.log("Salary as bool:", Boolean(ageNew)); // true
console.log("Salary as bool:", !!ageNew); //  conversion number to Boolean

// to number: + value Number (value)
// let number = +"123";
let number = Number("354");
console.log(typeof number) // 354 number



// to integer :parseInt(value)
// to real: parseFloat(value)

console.log(parseInt("34.99%")); // 34
console.log(parseFloat("34.99%tAH")); // 34.99

console.log("Red" + "Green"); // конкатинація - дві стрінгові змінні склуюються між собою

console.log("34" + 1); // "341" конкатинація ONLY для додавання
console.log("34" + false); // "34false"   конкатинація ONLY для додавання
console.log("10" - 3); // 7 
console.log("vlad" - 1); // NaN not a number
console.log("5" * 2); // 10

// ---------- Math ---------- заокруглення
Math.round(2.5); // 3
Math.floor(2.9); // 2
Math.ceil(2.1); // 3
Math.random(); // return random value [0...1] e.g., 0.56486738, 0.99999

Math.floor(Math.random() * 100);
console.log(Math.floor(Math.random() * 100)); // діапазон 100

// ++++++++++++++++       conditionals  умовні конструкції в залежності від умови як піде програма

const A = -11;
if (A > 0) {
    console.log("Number " + A + " positive");
} else {
    console.log("Number " + A + " negative");
}

const B = -20;
if (B > A) {
    console.log(B + " greater than " + A);
} else
    console.log(B + " less than " + A);


const a1 = 0;
if (a1 > 0) {
    console.log("Number " + a1 + " positive");
} else if (a1 < 0) {
    console.log("Number " + a1 + " negative");
} else {
    console.log("Number " + a1 + " zero");
}

// switch statement 

const a2 = 3 * 3;
switch (a2) {
    case 8:
        console.log("too small");
        break;
    case 9:
        console.log("exactly");
        break;
    case 10:
        console.log("too large");
        break;
    default:
        console.log("idk such values");
}

// conditional operator (ternary operator) тернарка
// заміняє if else

const x = 130;
const y = 50;
result = x < y ? 500 : 1000; //  спочатку умова x < y потім знак запитання ? як синтаксис а потім : і вираз 2 
// якщо перша умова тру - відпрацює вираз 1 а якщо фолс то умова 2
console.log(result);


const x2 = 10;
const y2 = 12;
result = x2 < y2 ? "A" : "B";
console.log(result)


// оператор while 
// syntax : while (condition) {....code....} цикл з передумовою

let i = 0;  // поки і <= 7 ми логуємо лічильник і інкрементуємо на 1 поки не буде 7
while (i <= 7) {
    console.log(i);
    i++
}

// --------- do while
// syntax : do while() {... code...}

let i2 = 0;
do {
    console.log(i2);
    i2++
} while (i2 < 7);

// -------- for 
// for (initialize; conditoin ; expression) {.... code ....}
for (let count = 0 < 10; count < 10; count++) {
    console.log("current count: " + count);
}
// 

const object = {
    a: 1,
    b: 2,
    c: 3
};
for (const property in object) {
    console.log(`${property}: ${object[property]}`);  // синтаксис в зворотніх апострофах, бектік `` ,  і ${} це називається інтерполяція.
    //  Коли ми в стрінгу ми можемо вставити змінну проперті
    /*  a: 1
     b: 2
     c: 3 */
}

// ------------------- for of  - iterate all values of the object
let str = 'Message';
let a;
for (a of str) {
    console.log(a);
}

//  Task 1. Напишіть програму мовою JavaScript, яка перетворює вхідне числове 
// значення в стрінгу, яка містить відповідну кількість годин і хвилин.
// Приклад роботи:
// inputValue = 82;
// result: 1:22.


const MinutesInHours = 60;
let inputValue;
inputValue = prompt("Insert a number and find out the hours and minutes");
let inputAsInt = parseInt(inputValue);

const hours = Math.floor(inputAsInt / 60);
const minutes = inputAsInt % 60;
const result = hours + ":" + minutes;
console.log(result);



const weeksInMonth = 7; // calculate weeks in amount of days
let inputNum = prompt("Insert a number of days");
let inputasInt2 = parseInt(inputNum);

const week = Math.floor(inputasInt2 / 7);
console.log(week);



// Task 2. Напишіть програму мовою JavaScript, яка пропонує юзеру ввести два числових значення (використати prompt()).
// Розрахувати суму, різницю, добуток і частку введених значень та вивести отримані результати.
// У випадку, якщо різниця вийшла від’ємною – результат потрібно перетворити в додатній.

let firstNum = parseFloat(prompt("Enter the first number"));
let secondNum = parseFloat(prompt("Enter the second number"));

let summary = firstNum + secondNum;
let sub2 = Math.abs(firstNum - secondNum);
let div2 = secondNum !== 0 ? firstNum / secondNum : "Ділення на нуль неможливе";
let mult2 = firstNum * secondNum;

console.log(summary);
console.log(sub2);
console.log(div2);
console.log(mult2);


// Task 3. Заданий такий код:
// let x = 1;
// let y = 2;

// let res1 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.


let x3 = 1;
let y3 = 2;

let res1 = "" + x3 + y3;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x3) + "" + y3;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x3 + y3); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Boolean(x3) % "";// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


// Task 4. Написати умовну конструкцію, яка в залежності від значення набраного балу по 100-бальній шкалі, 
// виводитиме відповідний результат. Зробити 2-ма різними способами через 2 різних умовних оператора.
// Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
// Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied!”
// Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
// Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
// Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!”



// let mark = parseInt(prompt("Enter any digit from 0-100"));

// if (mark >= 0 && mark <= 49) {
//     console.log("Unsatisfied!");
// }
// else if (mark >= 50 && mark <= 70) {
//     console.log("Satisfied!");
// }
// else if (mark >= 71 && mark <= 87) {
//     console.log("Good!");
// }
// else if (mark >= 88 && mark <= 100) {
//     console.log("Excellent!");
// }
// else {
//     console.log("Incorrect assessment!");
// }



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


// Task 5. Напишіть програму на JavaScript, яка ітерується цілими числами від 1 до 50.
// Для числа, кратного двом потрібно додатково виводити " kratne 2!".
// Для числа, кратного чотирьом потрібно додатково виводити " kratne 4!".
// Для чисел, кратних двом і чотирьом, виведіть " kratne 2 & 4!".
// Приклад роботи для перших 8-ми чисел діапазону:
// 1
// 2 kratne 2!
// 3
// 4 kratne 2 & 4!
// 5
// 6 kratne 2!
// 7
// 8 kratne 2 & 4!

for (let t5 = 1; t5 <= 50; t5++) {
    if (t5 % 4 === 0) {
        console.log(`${t5} + " Kratne 2 i 4!"`);
    }
    else if (t5 % 2 === 0) {
        console.log(`${t5} + " Kratne 2!"`);
    }
    else { console.log(t5); }
}

/*
Task 6*. Напишіть програму на JavaScript, яка приймає число від користувача і перевіряє, чи є це число простим. Простим є таке число, яке більше за 1 і ділиться без остачі тільки на себе і 1. Програма повинна вивести відповідне повідомлення, чи є число простим, чи ні.
Приклад роботи для числа 4:
4 is not a prime number.
Приклад роботи для числа 7:
7 is a prime number. */