// ----- create new object

// 1. using new 

/* const employee = new Object(); // створення нового класу
employee.firstName  = "P"; //  чкепез нотацію крапки додаємо значення
employee.lastName  = "S";
employee.position = "QA";
console.log(employee); */



//2. using {} - літеральний спосіб через клбча і значення

const order = {
    number:10,
    price:1200,
    discount: 15,
    client : "John Smith",
    complete: true

};

console.log ("Order status: ", order.complete ?  "Done" : "In Progress"); // тернарка, в залежності від значення властивості компліт ми будемо мати або done  або in progress
console.log("Order type :", typeof order);


// як додати нові властивості до обєкта
order.date = "28/02/1989";
order.products = ["Apples", "Bananas", "Coconuts"];
order.address = {
    city: "Lviv",
    street: "Main",
    building: "1"};
    console.log (order);
    console.log(order.products[2]); //Coconuts


    const order6 = [10, 16 , 28, "Bob", ["appple", "peach", "strawbwerry"], {street:"boom"}];
    console.log(order6[5]); // {street:"boom"}

//override 
    order.price += 30;
    console.log(order.price); // 1230 
 



    // read object properties 
    //1 object.property
    //2 object["property"]


console.log(`Order info: ${order["number"]} at ${order["date"]}`); //Order info: 10 at 28/02/1989
console.log (`[${order.number}]  ${order.client} ordered ${order.products.length} items!`) // [10]  John Smith ordered 3 items!
console.log(`Client address: ${order.address.city}, ${order.address.street}, ${order.address.building} ... `) //Client address: Lviv, Main, 1 ... 


order.speed = "100";
console.log(order.speed); // 100

// видалити властивість з обєкта
delete order.speed;
console.log("Value: ", order.bonus); // bonus не було 
console.log("Value: ",order.speed);  // speed видалено тому і немає



// ми можемо працювати з обєктом який передадається в функцію як параметр
const order = {
    number:10,
    price:1200,
    discount: 15,
    client : "John Smith",
    complete: true
};

function showOrder(order){
    console.log("Order: ", order)
}
showOrder(order);


// --- get all objects keys

const order = {
    number:10,
    price:1200,
    discount: 15,
    client : "John Smith",
    complete: true
};

// for (const key in order){
//     console.log(key + " ..." + order[key])  }
    /*result:  number ...10
    price ...1200
    discount ...15
    client ...John Smith
    complete ...true */


// for (const key in order){   //  видалить всі не цифрові
//     if(typeof order[key] !== "number"){
//         delete order[key]
//     }
// }
// console.log(order)

console.log("Has number property:" , order.hasOwnProperty("number"));
console.log("Keys: ", Object.keys(order)) // вичитує всі ключі
console.log("Keys: ", Object.values(order)) // вичитує всі значення


// ----  methods = function inside of the object
// this

// THIS KEYWORD - вказує на поточний обєкт, то значення ке набуває залежить від контексту
// method
const employee = {
    name: "Peter",
    surname: "Parker",
    position: "dev",
    exp: 4, 
    fullname: function () {   // конструкція метод обєкта емплоїї - ФУНКЦІЯ ЗАПИСАНА У ВЛАСТИВІСТЬ ТО МЕТОД
        return this.name + " " + this.surname // this вказує на поточний обєкт бо даний метод fullname належить до оюєкта емплоїї
    }
}
console.log(employee.fullname())

// 2) this alone
let a = this;
console.log(a); // Window

// 3) this in a Function (Default)
function userFunction() {
    return this; // Window
  }
  // 4) this in a Function (Strict)
"use strict"; //  суворий режим 
function userFunction() {
  return this; // undefined
}
// 5) In HTML event handlers -->
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>



// -------------------  static 
class Book {
    static PublishingYear = 2015
    constructor (author){
        this.bookname = author;
    }
    static readBook(){
        return "You reading new book!"
    }
};
const newbook  = new Book("Dumas");
// console.log(newbook.PublishingYear); // undefined бо коли ми говорим про статику то вона доступна тільки до каррент обєкта де була представлена
// console.log(Book.PublishingYear); // 2015
console.log(Book.readBook()); // You reading new book!
//console.log(newbook.readBook()); // error

// якщо є функціонал на рівні класу ми можем створбвати функцціонал через статику

// ------------------- GETTERS and SETTERS
// спец функціонал в класі які допомагають отриммати і задати певні поля класу

class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}
const user = new User("Donny");
//console.log(user.name); // Donny
const user2 = new User("David");
user2.name = "BOB";
console.log(user2);






























// Task 4

class Student {

    static allStudents = []; // масив   зберігає всіх створених студентів

    constructor(fullName, direction) {
        this.fullName = fullName,
        this.direction = direction;
        Student.allStudents.push(this);  //  додати об'єкт у масив - доступ до списку ззовні класу
    }

    showFullName() {
    return this.fullName
    }
    nameIncludes(data){
    return this.showFullName().includes(data);
    }

    static studentBuilder(){                    // h)
    return new Student ("Ihor Kohut", "qc")  
    }

    get direction(){
        return this._direction;
    }
    set direction(value){
        if (typeof value === "number") {
            console.log ("Shouldn't be a number")
            return;
        }
        this._direction = value;
    }

    static showAll() {
        console.log("Усі студенти:");
        Student.allStudents.forEach((student, index) => {
          console.log(`${index + 1}) ${student.showFullName()} — ${student.direction}`);
        });
      }
    }

const stud1 = new Student("Ivan Petrenko", "web"); // f
console.log(stud1.showFullName()) //b) const stud1 = new Student("Marta Horbatska", "JS Course")
console.log(stud1.nameIncludes("Ivan")); //c) stud1.nameIncludes('Ivan'); // true
console.log(stud1.nameIncludes("Denysenko")); //stud1.nameIncludes('Denysenko'); // false

const stud2 = new Student ("Sergiy Koval", "python"); // g)
console.log(stud2.showFullName());
stud2.direction = "football";
console.log(stud2);

const stud3 = Student.studentBuilder(); 
console.log(stud3.showFullName()) // d) Ihor Kohut
console.log(stud3.direction) // qc

Student.showAll(); // виводить список студентів у консоль
