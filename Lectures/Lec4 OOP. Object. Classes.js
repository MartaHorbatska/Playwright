// ----- create new object

// 1. using new 

/* const employee = new Object(); // створення нового класу
employee.firstName  = "P"; //  чкепез нотацію крапки додаємо значення
employee.lastName  = "S";
employee.position = "QA";
console.log(employee); */



//2. using {} - літеральний спосіб через ключі  і значення

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


// ---------------------- OOP Principles
 // * Inheritance -- наслідування 
 // * Polymorphism  -- дія зреалізована в інший спосіб
 // * Encapsulation - задаємо певне обмеження ззовні на доступ певного функціоналу класу
 // * Abstraction 

// Inheritance
class Animal {
    constructor(kind) {
      this.kind = kind;
    }
  
    run() {
      console.log(this.kind + " runs!");
    }
  }
  
  // Inherit from Animal specifying "extends Animal"
  class Leopard extends Animal {
    jump() {
      console.log(this.kind + " jumps!");
    }
  }
  
  const leopard = new Leopard("Spotted leopard");
  leopard.jump(); // Spotted leopard jumps! //завдяки наслідуванню 
  //leopard.run();      // Spotted leopard runs!
  

 // Inheritance. Keyword super
  
/* extends	Leopard наслідує властивості та методи класу Animal
super(...)	Викликає конструктор батьківського класу і ініціалізує kind, weight
this.speed	Додає нову властивість, унікальну для Leopard
leopard.run()	Метод, успадкований від Animal */

class Animal {
    constructor(kind, weight) {
      this.kind = kind;
      this.weight = weight;
    }
  
    run() {
      console.log(this.kind + " runs!");
    }
  }
  
  class Leopard extends Animal {
    constructor(kind, weight, speed) {
      super(kind, weight); // Виклик конструктора з батьківського класу
      this.speed = speed;
    }
  
    jump() {
      console.log(this.kind + " jumps!");
    }
  }
  
  const leopard = new Leopard("Spotted leopard", 40, 60);
  console.log(leopard.weight); // 40
  console.log(leopard.speed);  // 60

// множинне наслідування не підтримується в JS

// ---------------------POLYMORPHISM

/* super(kind, weight)	передає аргументи до конструктора Animal
super.run()	викликає run() з батьківського класу (Animal)
run() в Leopard	перевизначає метод run, додає додаткову логіку
jump()	унікальний метод підкласу */

class Animal {
    constructor(kind, weight) {
      this.kind = kind;
      this.weight = weight;
    }
  
    run() {
      console.log(this.kind + " runs!");
    }
  }
  
  class Leopard extends Animal {
    constructor(kind, weight, speed) {
      super(kind, weight);        // викликає батьківський конструктор
      this.speed = speed;
    }
  
    run() {
      //console.log(this.kind + " runs!"); // ← закоментовано, бо буде взято з super
      super.run(); // виклик методу run() з Animal
      console.log(this.kind + " getting ready to jump");
    }
  
    jump() {
      console.log(this.kind + " jumps!");
    }
  }
  
  const leopard = new Leopard("Spotted leopard", 40, 60);
  leopard.run();
  // Spotted leopard runs!
  // Spotted leopard getting ready to jump
  
// ми беремо метод а базовому класі і перевизначаємо - оверрайдимо в дочірньому


// -----------------INCAPSULATION
// кавоварка - зовнішній інтерфейс щоб заварити каву без потреби мати доступ до внутрішньої частини
// закриває внутріщнє, щоб дати доступ до зовнішнього
 // модифікатори доступу public, private доступний всеердині класу, protected - немає в JS

// Encapsulation. Access modifier
// public private protected

class CoffeeMachine { // в нас є клас кавомашина
    waterAmount = 0; // the amount of water inside  
  
    constructor(power) { // приймає поле потужності 
      this.power = power;
      console.log(`Created a coffee-machine, power: ${power}`); // каже створюємо з потужністю  100 ват 
    }
  }
  
  // create the coffee machine
  const coffeeMachine = new CoffeeMachine(100);   // від обєкта класу кофі машін ми пробуєм ззовні поза межами класу 
  // доступитись до поля вотер емаунт 
  console.log(coffeeMachine.waterAmount);
  
  // add water
  coffeeMachine.waterAmount = 200; // присвоюєм нове значення 
  console.log(coffeeMachine.waterAmount);
  console.log(coffeeMachine);
  
/* 
  waterAmount = 0	публічна властивість — її можна змінювати ззовні
  this.power = power	задається при створенні (через конструктор)
  coffeeMachine.waterAmount = 200	ззовні ми змінюємо кількість води
 */

// underscore _ — protected/private

class CoffeeMachine {
    _waterAmount = 0;
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Negative water");
      this._waterAmount = value;
    }
  
    constructor(power) {
      this._power = power;
    }
  }
  
  let coffeeMachine = new CoffeeMachine(100);
  
  // coffeeMachine.waterAmount = -10; // ❌ Error: Negative water
  
  coffeeMachine._waterAmount = 100; // обхід через псевдоприватне поле
  console.log(coffeeMachine._waterAmount); // 100
  

  /* _waterAmount	псевдоприватна властивість (не захищена насправді)
  get waterAmount()	дозволяє читати coffeeMachine.waterAmount
  set waterAmount(value)	дозволяє задати значення з перевіркою на < 0
  coffeeMachine._waterAmount = 100	пряме втручання в приватність (⚠ не рекомендується)

  NOTE: нижнє підкреслення (_) — це просто домовленість.
  Для справжньої приватності краще використовувати #waterAmount (ES2022).
 */
// Encapsulation. Private properties

class CoffeeMachine {
    #waterLimit = 900;
  
    checkWater(value) {
      if (value < 0) throw new Error("Negative water");
      if (value > this.#waterLimit) throw new Error("Too much water");
    }
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // coffeeMachine.checkWater(1200); // ❌ Error: Too much water
  // Can't access privates from outside of the class
  console.log(coffeeMachine.#waterLimit); // ❌ SyntaxError
  
  coffeeMachine.#waterLimit = 1000; // ❌ SyntaxError
  
  #/* waterLimit	Справжня приватна властивість — доступна лише в класі
  this.#waterLimit	Доступ до #waterLimit лише зсередини класу
  coffeeMachine.#waterLimit	❌ Помилка: приватне, не можна викликати зовні */


  class CoffeeMachine {
    #waterLimit = 900;
  
    // Геттер
    get waterLimit() {
      return this.#waterLimit;
    }
  
    // Сеттер
    set waterLimit(value) {
      if (typeof value !== "number" || value <= 0) {
        throw new Error("Water limit must be a positive number");
      }
      this.#waterLimit = value;
    }
  
    // Метод класу
    classMethod() {
      console.log("Example class method");
    }
  
    // Перевірка
    checkWater(value) {
      if (value < 0) throw new Error("Negative water");
      if (value > this.#waterLimit) throw new Error("Too much water");
    }
  }
  
  const cm = new CoffeeMachine();

  console.log(cm.waterLimit); // 900 ✅ через геттер
  
  cm.waterLimit = 1000;       // ✅ через сеттер
  
  cm.checkWater(800);         // OK
  // cm.checkWater(1200);     // ❌ Too much water
  
  cm.classMethod();           // Example class method

  /* #waterLimit — справжнє приватне поле (доступне тільки всередині класу)
  доступ до нього тільки через get waterLimit() та set waterLimit(value)
 */

  
// Task 2

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
