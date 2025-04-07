/* Task 1. Створіть функцію display(), яку можна викликати трьома різними способами за допомогою техніки перевантаження.
Перевантаження 1: приймає один стрінговий параметр і друкує його.
Перевантаження 2: приймає два стрінгових параметри та друкує їх в окремих рядках.
Перевантаження 3: приймає масив стрінгів і друкує кожен рядок у новому рядку.
Приклад роботи:
display("Hello, World!"); // Hello, World!
display("Hello", "World!"); // Hello
World!
display(["Hello", "World", "!"]); // Hello
World
!

 */
function display(text: string): void;
function display(text1: string, text2: string): void;
function display(textArray: string[]): void;

function display(param1: string | string[], param2?: string): void {
   if (Array.isArray(param1)) {
       param1.forEach(str => console.log(str));
   } else if (param2 !== undefined) {
       console.log(param1);
       console.log(param2);
   } else {
       console.log(param1);
   }
}

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);


/* Task 2. Створіть дженерік функцію identity(), яка приймає масив як аргумент.
Кожен елемент масиву повинен задовольняти умову: мати поле рейтингу rating
Функція identity() має повертати середнє значення рейтингів у масиві.
Приклад роботи:
console.log(identity([{name: "Anna", rating: 3}])) // 3
console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}])) // 4 */

function identity<T extends { rating: number }>(items: T[]): number {
    if (!items.length) return 0;

    let sum = 0;
    items.forEach(item => sum += item.rating);
    
    return sum / items.length;
}
//Приклад роботи:
console.log(identity([{name: "Anna", rating: 3}])) // 3
console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}])) // 4 



// function overload

// створення прототипів



// Generic вирішує такий варіант - bad practice
function identity(data:string| number | boolean | number[] | string []):string| number | boolean | number[] | string [] {

    return data
}

// good practice
function identity <T> (data:T):T{

    return data
}

