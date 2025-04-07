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
function display(text2: string[]): void;

function display(text1: string | string[], text2?: string): void {
   if (Array.isArray(text1)) {
       text1.forEach(str => console.log(str));
   } else if (text2 !== undefined) {
       console.log(text1);
       console.log(text2);
   } else {
       console.log(text1);
   }
}

//Приклад роботи:
display("Hello, World!"); 
// Hello, World!
display("Hello", "World!"); 
// Hello
// World!
display(["Hello", "World", "!"]); 
// Hello 
// World 
// !

/* Task 2. Створіть дженерік функцію identity(), яка приймає масив як аргумент.
Кожен елемент масиву повинен задовольняти умову: мати поле рейтингу rating
Функція identity() має повертати середнє значення рейтингів у масиві.
Приклад роботи:
console.log(identity([{name: "Anna", rating: 3}])) // 3
console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}])) // 4 */

function identity <T extends { rating: number }>(items: T[]): number {
    if (!items.length) return 0;

    let sum = 0;
    items.forEach(item => sum += item.rating);
    
    return sum / items.length;
}
//Приклад роботи:
console.log(identity([{name: "Anna", rating: 3}])) // 3
console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}])) // 4 


/* Task 3 
Створіть декоратор withEmploymentDate, який додає поле EmploymentDate зі значенням 2024-04-12 до класу, з яким воно використовується.

Використовуйте створений декоратор з класом Manager.

class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'
    constructor(){
        console.log('Initializing the Manager class')
    }
}

Приклад роботи:
const manager = new Manager();
console.log(manager);
// Output
{ "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z" }

*/

function withEmploymentDate<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        employmentDate = new Date('2024-04-12');
    }
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task';
    project: string = 'Simple project';
    constructor(){
        console.log('Initializing the Manager class');
    }
}

// Приклад роботи:
const manager = new Manager();
console.log(manager);
// Output
// { task: 'Simple task', project: 'Simple project', employmentDate: '2024-04-12T00:00:00.000Z' }
