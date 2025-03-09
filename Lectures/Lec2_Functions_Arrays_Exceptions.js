// JS functions Функції . Arrays Масиви. Exceptions - вийнятки

// =-=-=-=-=-=-=-        FUNCTIONS

// function declaration : function name (parameters)  {... body ... }
// function expression : function (parameters) {... body ... }
// naming : printSomething() getSmth() setSmth() changeSmth() checkSmth()

function showMessage(){
    const n = Math. round(Math.random() * new Date().getFullYear());
    console.log("I like JS. Year: ", n);
}

//function invokation:name (parameter values)
showMessage();
showMessage();
showMessage();

//-------------------parameters--------------------
// function parameters : name (param1, param2)  { ... }

function multiplication (a,b) {
    const result = a*b;
    console.log (result);
}
multiplication(3,8);
multiplication(10,33);

// ------------------- Default parameters-----------------
function multiplication1 (a=1, b=1, c=1){
    const result2 = a*b*c;
    console.log(result2);
}
multiplication2(3); // 3 
multiplication2(3,5); // 15 
multiplication2(3,5,7); // 105

//--------------------arguments---------------------------

function multiplication3() {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) { // length визначає кількісьть елементів в аргументс
        result *= arguments[i]; // *= означає result= result*arguments[i] - суміщене множення
    }
    console.log(result)
}
multiplication3(3);
multiplication3(3, 5);
multiplication3(3, 5, 7);
multiplication3(3, 5, 7, 10);

//-----------------return----------- Повернення з функцій
// return operator: ends function snd return value from it
function mult(a,b){
    console.log("Not Ignored");
    return a*b;
    //return - ends function and return a value 
    console.log("Ignored"); // ignored бо якщо в тілі є ретьорн то робота функції припиняється і ми виходимо з неї
    }
const res = mult(4,8);
console.log(res);


// ---------------Scope --------------
// область видимості.
// типи - локальний і глобальний. Це функціональний скоуп , тому коли створюється нова функція то 
// вона має свій власний скоуп і ми маєм домсутп до певних змінних

// Код тут НЕ МОЖЕ використовувати "name"
function myFunction() {
    let name = "John";
/* Змінна name створена всередині функції myFunction за допомогою let.
Вона локальна для цієї функції, тобто її не можна використати за межами функції.
Код за межами myFunction не має доступу до цієї змінної. */
}

/* 
Глобальна змінна name:
Визначена поза функцією і доступна як у глобальному коді, так і всередині функцій.
Функція myFunction:
Вона не перевизначає name, тому може використовувати глобальну змінну.
Якщо всередині myFunction створити нову змінну name через let чи const, вона буде локальною, і глобальна name не зміниться */
function myFunction() {
    let name = "Alice"; // Локальна змінна "name", яка не впливає на глобальну
    console.log(name); // Alice
}
console.log(name); // John

const name1 = "John";
function myF(){
    const name2 = "Ben";
    console.log(name2);
    console.log(name1); // глобально доступна на рівні програми в цілому, тому побачимо результат
}
myF();
console.log(name2); // ми викликаємо функцію і кажемо залогувати змінні з функції 
// і поза межами функції але name 2 is not defined бо він знаходиться локально
console.log(name1);


// -----------Arrow function-------------------------
const sum2 = (a, b) => a + b; 
// ES5 аналог
//let sum2 = function(a, b) { return a + b; };
console.log(sum2(1, 2)); // 3

// Arrow function як callback
const arr = [5, 8, 3]; // масив
const sorted = arr.sort((a, b) => a - b); // використовуєм метода маству сорт і ми передаємо параметр методу функцію  стрілкову, який
// відповідає за зростання
console.log(sorted); // [3, 5, 8]

// -------- IIFE (Immediately Invoked Function Expression) --------
(function () {
    console.log("I like JavaScript");
})(); // "I like JavaScript"


// IIFE ----------------- Immediately invoked function expression finction 

(function() {
    console.log ("Hello");
    } ()); // "Hello" - () тут викликає функцію. Тому викликати її ще раз не можна, вона одноразова, без імені


(function (n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    console.log("The factorial of the number " + n + " is " + res);
})(4); // The factorial of the number 4 is 24
/* Обчислює факторіал числа n (n! = 1 * 2 * 3 * ... * n).
Використовує цикл for для множення чисел від 1 до n.
Виводить результат у консоль. */


// -------------------------------------всплиття догори чи підняття HOISTING 
// declaring of variables / function before using them
console.log (salary3); // undefined
var salary3 = 1200;
console.log(salary3); 
// код виконується  в 2 фази:1ю інтерпритатор проходиться по всьому коду і виклнує код на 2 фазі з зібраної інфою з попередньої фази
// hoisting притаманне оголошення змінної через var 

//Hoisting function - здкларована функція хойститься і може убти викликана з будь якого місця програми
sayHi("John");
function sayHi (name){
    console.log("Hello, " + name);
}

sayHi("John");
var sayHi = (name) => {
    console.log("Hello, " + name);
}


// =-=-=-=-=-=-=-=-=-=-=-=--ARRAYS=-=-=-=-=-=-=-=- 
// структурована колекція даних
//створити через []

let array = [];

//const colors = ["red", "green", "blue"]; // коден елемент масиву має свою позицію і свій індекс, тобто перший це 0 
/* 0: "red"
1: "green"
2: "blue"
length: 3 */


const mixed = [
    120.
    null,
    "hello",
    true,
    [1,2,3],
    {id:1002, title:"Hi"},
    () => {}
]

const colors = ["red", "green", "blue"];
colors[3]; // blue
colors[3] = "pink";
colors [colors.length - 1]; // gives teh last element
colors[20] = "black"; // bad practice, бо ми пропускаєм багато елементів, що займає память, 
// і вони всі будуть андефайнд і colors [colors.length - 1] буде тоді 21

console.log (typeof colors);

 // checking for array
 console.log ("Is Array: ", Array.isArray(colors)); // індикатор чи масив чи ні - видасть тур фи фолс
 //arrays мають обширні методи масивів 


// add new el
colors.push("grey"); //додати ел вкінець масиву
colors.pop(); // remove last added
colors.unshift("yellow", 235);
console.log(colors);

const numbers = [4, 60, 1, -1, 0, -3, 99, -4, 120, 1, -4, 44, -10];

console.log("Numbers:", numbers);

console.log("Index of 1:", numbers.indexOf(1)); // 2, якщо не знайдено: -1 - повертає позицію елементу
console.log("Last Index of 1:", numbers.lastIndexOf(1)); // 9 - повертає позицію останнього з елементів
 

//method slice
const firstHalf = numbers.slice(0, numbers.length / 2); // копія масиву і ділиться на слайси, на 2 тут
console.log("First Half:", firstHalf);

//method filter
const cities = ["Rome", "Lviv", "Warsaw"];  //  фільтруєм по умові
const newArr = cities.filter(function(city) { return city.length < 5; }); // вертаємо результат такої умови, чи довжина поточного ел манше 5
console.log(newArr); // ["Rome", "Lviv"] // масив з рим і львів
console.log(cities); // переконуємся що старйи масиві не постраждав

//method map - промапити шось
const cities = ["Rome", "Lviv", "Warsaw"];
const newArr = cities.map(function(city) { return city + " Capital"; }); // передаєм функцію колбек, зворотнього виклику і кажем 
// що до кодного ел ми додаємо слово капітал, робим конкатинацію із стрінгою
console.log(newArr); // ["Rome Capital", "Lviv Capital", "Warsaw Capital"]
console.log(cities); // ["Rome", "Lviv", "Warsaw"]
 //mutable / unmutable  - ті які міняють масив (push). Не міняють - filter

// reduce - функція редюсер який приймає 2 параметри total + value і вертає тотал (значення аккумулятора) і велью, поточне значення
const data = [2, 4, 6, 8];
function reducer(total, value) { 
    return total + value; 
}
const sum = data.reduce(reducer);
console.log(sum); // 20 - вертає з масиву єдине накопичене значення


/* ******************* Для додавання/видалення елементів: ******************* 

push(... items) – додає елементи до кінця,
arr.pop() – дістає елемент з кінця,
arr.shift() – дістає елемент з початку,
arr.unshift(...items) – додає елементи в початок.
splice(pos, deleteCount, ...items) – починаючи з індексу pos, видаляє deleteCount елементів та вставляє items.
slice(start, end) – створює новий масив, копіюючи в нього елементи з позиції start до end (не включаючи end).
concat(...items) – повертає новий масив: копіює всі члени поточного масиву і додає до нього items. 
Якщо якийсь із items є масивом, тоді беруться його елементи.

******************* Для пошуку серед елементів: ******************* 

indexOf/lastIndexOf(item, pos) – шукає item, починаючи з позиції pos, і повертає його індекс або -1, якщо нічого не знайдено.
includes(value) – повертає true, якщо в масиві є елемент value, в іншому випадку false.
find/filter(func) – фільтрує елементи через функцію і віддається перше/всі значення, при проходженні яких функція повертає true.
findIndex схожий на find, але повертає індекс замість значення.
Для перебору елементів:

forEach(func) – викликає func для кожного елемента. Нічого не повертає.

******************* Для перетворення масиву: ******************* 

map(func) – створює новий масив з результатів виклику func для кожного елемента.
sort(func) – сортує масив «на місці», а потім повертає його.
reverse() – «на місці» змінює порядок елементів на протилежний і повертає змінений масив.
split/join – перетворює рядок в масив і назад.
reduce(func, initial) – обчислює одне значення на основі всього масиву, викликаючи func для кожного 
елемента і передаючи проміжний результат між викликами.


 */


//=-=-=-=-=-=-=-=-=- EXCEPTIONS =-=-=-=-=-=-=-=-=-=
// Suntax errors - синтаксичні
// runtime errors - в виконанні коду
// logical errors - прорахунки в коді


// try catch 
try {
    //code run
} catch (error) {
    //error handling
}


try {
    console.log("Start try block!");

    let num = 10.456789;

    console.log(email); // ReferenceError: email is not defined

    // Інші приклади помилок:
    // num.pop(); // TypeError: num.pop is not a function
    // console.log(num.toFixed(-2)); // RangeError: toFixed() digits argument must be between 0 and 100
    // eval("leg a = 10;"); // SyntaxError: Unexpected identifier

    console.log("End of the try block!"); // Не буде виконано, якщо виникла помилка вище
} catch (error) {
    // Обробка помилки
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
}

function enterPIN() {
    let pin = prompt("Enter PIN-number (max length 4):", "");
    if (pin.length > 4) {
        throw new Error("Line length greater than 4 characters");
    }
    return pin;
}

try {
    let result = enterPIN();
    console.log(result);
} catch (exception) {
    console.log(exception.name);     // Наприклад: "Error"
    console.log(exception.message);  // Наприклад: "Line length greater than 4 characters"
    console.log(exception.stack);    // Повний стек викликів
}

// ******* try {...} catch {...} finally {...}

try {
    console.log("Section try");
    // count = count + 1; // ця стрічка викликає ReferenceError, бо count не визначено
} catch (error) {
    console.log("Section catch");
    console.log(error.message);
} finally {
    console.log("Section finally"); // finally відпрацює в будь якому випадку, якщо треба буде все рівно виконати дію то ця конструкція підійде
}


//  Task 1. Реалізуйте функцію processData(num1, num2, action), яка приймає числові параметри num1, 
// num2 і повертає результат їх обчислення в залежності від значення параметра action.

// У випадку якщо:
// - action=”sum” функція має повернути суму
// - action=”product” функція має повернути добуток
// - action=”square” функція має повернути num1 в степені num2
// За замовчуванням num1 і num2 рівні 0, а action ”sum”.
// Приклад роботи:
// console.log(processData(10, 4, ”product”)); // 40

function processData(num1 = 0, num2 = 0, action = "sum") {
    let result;
    if (action === "sum") {
        result = num1 + num2;
    } else if (action === "product") {
        result = num1 * num2;
    }
    else if (action === "square") {
        result = num1 ** num2;
    } else {
        result = "Unknown action";
    }
    return result
}
console.log(processData()); // 0
console.log(processData(10, 4, "sum")); // 14
console.log(processData(10, 4, "product")); // 40
console.log(processData(10, 4, "square")); // 10000
console.log(processData(10, 4, "time")); //Unknown action

/*
Task 2. Реалізуйте функцію findElem(arr, el), яка приймає параметри arr - масив і el - елемент. 
Функція має визначити чи міститься елемент el в масиві arr, і повертати відповідне булеве значення.

Приклад роботи:
const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7)); // false
console.log(findElem(arr, "Alex")); // true



Task 3. Реалізуйте функцію deleteItem(arr, item), яка приймає параметри arr - масив і item – елемент масиву. 
Функція має видаляти елемент item з масиву arr, і повертати вихідний масив, який не містить цього елемента.
Приклад роботи:
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16)); // [3, 12, 19, 21, 33]

Task 4. Реалізуйте функцію getCircleLength(r), яка приймає параметр r - радіус кола і обчислює його довжину. 
Передбачити припинення виконання програми і генерацію помилки у випадку, 
якщо функції передано не числовий або менший-рівний 0 параметр.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
Приклад роботи:
getCircleLength(“five”); // “Incorrect radius - please, enter a positive numeric value!”

Task 5. Реалізуйте функцію checkID(), яка пропонуватиме користувачу ввести власне ID. Валідні ID знаходяться в діапазоні від 1 до 1000.
Функція має генерувати в модальному вікні помилки у випадку, коли:
- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your ID”),
- нечислове значення
- ID знаходиться поза межами коректного діапазону.
Якщо ID валідне юзер отримує відповідне сповіщення.
В блокові catch передбачити виведення назви і опису помилки.

Task 6*. Реалізуйте функцію findArrDiff(arr1, arr2), яка приймає числові масиви arr1, 
arr2 і повертає масив чисел, які не повторюються у вихідних масивах.
Приклад роботи:
console.log(difference([5, 10, 20], [0, 10, 20, 30])); // ["5", "0", "30"] */