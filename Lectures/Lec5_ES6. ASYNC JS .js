 // -------------------- ES6 ----------------------

 // let const 

 //1 - we can use before declaration

 console.log(number); // undefined - hoisting, оголошення через вар хойститься і інтерпретатор знає про змінну а вона ще навіть не була оголошена
 var number = 10;

 // we can recreate variable with same name
 var number = 20; // allow

 console.log(str); //  error, через let i const хойстінга не буде
 let str = "hello";
 // let str

 //2 - [var] has function scope  / [let] has block/local scope {...}
function newTest () {
    console.log(varValue); // undefined

    if (4 > 2) {
        var varValue = 45;
        let letValue = 55;
    } // end of block
;

    console.log(varValue); // 45
    console(letValue)      // error

}
newTest ();


 // 3 - [var] as loop variable
 // в нас є цикл і ми ітеруємся від і нуля до і 10 і в новий елемент 
 // масиву записуєм анонімну функцію яка логує поточне значення лічильника
 
 var array = [];
 for (var i = 0; i<10; i++){
    array [i] = function (){
        console.log(i);
    };
 }
 array[0](); // 10
 array[4](); // 10 коли ми працюємо через вар то на всі ітерації даного цикла буде створюватись єдиний екземпляр змінної і 



 // [let] as loop variable
 const array = [];
 for (let i = 0; i<10; i++){
    array [i] = function (){
        console.log(i);
    };
 }
 array[0](); // 0
 array[4](); // 4 - на кожній ітерації при оголошенні змінної через лет буде створбватись окрема змінна

 // хойстінг
 // блочна область видимості



 // -------------------------------- Template Literals --------------- 

 const salary = 900;
 const bonus = 400;
 const income = `Your monthly income will be ${salary+bonus}`; // оператор інтерполяції {salary+bonus}
 console.log(income);  // використання бектіків ``

 console.log(`Example
    multiline
            lines`)    // використання бектіків ``


            //
// ------------------------------- spread ----------------------

const numbers = [11,8,44,87];
const minimum = Math.min(...numbers); // Розкладає масив
console.log(minimum)

const arr1 = [1,7,8,9,45];
const arr2 = [4,5,98,5,6,3,4];
const Together = [...arr1, ...arr2]; // об'єднали масиви
console.log(Together)
const Min = Math.max(...Together); // знайшли максимальне число в обєднаних даних 
console.log(Min);



[...arr]; // new array creation

// rest parameters 
const func = (arg1, ...rest) => {
    console.log(arg1)
    console.log(rest)
    }

func ("First", "Second", "Third", "Fourth");

// array of parameters as a list

function func(arg1, arg2, arg3) {
    console.log (arg1 + " " + arg2 + " " + arg3 );
}

const data  = ["First", "Second", "Third" , "Fourth"];
func(data);

// func (...data); // "First Second Third"




// -------------------- destructuring --------------------
// деструктурування 

// split [array] / [object] to a separate variables

const colors = ["white", "black", "blue", "gray", "yellow"]

// const light = colors[0];
// const dark = colors[1];
// const accent = colors[2];

const [light, dark, , , accent]= colors; // деструктурємо масив і огортаємо в квадратні дужки

console.log("light color: ", light);
console.log("dark color: ", dark);
console.log("accent color: ", accent);

// Деструктуризація with spread operator 
const[firstColor, ...rest]= ["red", "blue", "white", "black", "yellow"]
console.log(firstColor)
console.log(rest)


const direction ={
    type: "web",
    name: "JavaScript"
};
const{type, name} = direction; // const type  = direction.type;
// const name = direction.name;

console.log(type); // web
console.log(name);  // JavaScript


const cities = {
    first: "Lviv",
    second: "Kyiv",
    third: {p1: "Berlin", p2: "Hamburg"},
};

const   {
    first:f,
    second: s,
    third: {p1, p2}, 
} = cities;

console.log(f)
console.log(s)
console.log(p1),
console.log(p2)


// Destrucuring in functions parameters

function func ({first, second, third}){
    console.log(first + " " + second + " " + third);
}
const cities = {
    first: "Lviv",
    second: "Kyiv",
    third: "Dnipro"
};

func(cities);


// Заданий об’єкт book, який представляє інформацію про книгу, включаючи її назву, автора, видавництво та характеристики.
// Напишіть функцію getBookInfo(obj), яка приймає цей об’єкт як параметр і використовує деструктурування для отримання таких властивостей:
// title, author, publisher, pages та language.

// Функція повинна повертати новий об’єкт, що містить тільки ці витягнуті властивості.

function getBookInfo(obj){
const {title, author, publisher, details:{pages, language}} = obj;
return ({title, author, publisher, pages, language})};

const book = {
    title: "JavaScript Essentials",
    author: "Jane Smith",
    year: 2021,
    publisher: "TechBooks",
    details: {
      pages: 350,
      language: "English",
      format: "Hardcover"
    }
  };

  console.log(getBookInfo(book));
// ---------------------------- Symbol -------------------------

//----------------------Map-------------


// PROMISES



const promise = new Promise(function(resolve,reject){
    resolve("Done");
})
console.log(`Before promise`) ;

promise.then(function(result){
    console.log(`${result}`);
})

console.log(`After promise`);




const p = new Promise(function(resolve,rejcet){
    setTimeout(()=> resolve(1) , 2000)
})
p.then(function(result) {
    console.log(result);
    return result*2;
}) .then(function(result){
    console.log(result);
return result*2;
}) .then (function(result){
    console.log(result) 
        return result*2
    }
 )


//  ///Реалізуйте функцію verifyAccessCode(code), яка перевіряє, чи введено правильний код.
// Функція повертає Promise.
// Якщо код "2024OK", то resolve("Access granted ✅") через 1.5 секунди.
// Якщо код неправильний — reject("Access denied ❌")
// verifyAccessCode("2024OK")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

function verifyAccessCode(code) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            if (code === "2024OK"){
                resolve("Access granted");
            }
            else {
                reject("Access denied"); 
            }},1500)
    }) 
}
verifyAccessCode("") // Access denied
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err));

.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error) // Access denied
})

// ---------------------- Callbacks ----------------------

console.log("Request to server ...");

setTimeout(function fetchData() {
    console.log("Loading ...");

    const serverData = {
        user: "Employee10",
        id: 122,
        location: "Lviv"
    };

    setTimeout(function showData() {
        serverData.received = true; // розширяємо об'єкт
        console.log("Data loaded:", serverData);
    }, 1500);

}, 1500);

console.log("Other activities");

// Request to server ...
// Other activities
// Loading ...
// Data loaded: { user: 'Employee10', id: 122, location: 'Lviv', received: true }

// колбеки мають недоліки - коли є багато колбеків і код стає нечитабельним

//-------------------------------PROMISES -------------------- 
const promise = new Promise(function(resolve, reject) {
    // function executor
});
// new Promise(...) — створює новий об'єкт Promise.
// function(resolve, reject) — виконавча функція, яка автоматично викликається при створенні Promise.
// resolve — викликається, якщо операція успішна.
// reject — викликається, якщо сталася помилка.

const promise = new Promise(function(resolve, reject) {
    const success = true;
    if (success) {
        resolve("Operation was successful");
    } else {
        reject("Something went wrong");
    }
});

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      const success = true; // змінити на false щоб побачити reject
  
      if (success) {
        resolve("Data successfully loaded!");
      } else {
        reject("Failed to load data!");
      }
    }, 2000); // 2 секунди затримки
  });
  
  // обробка результату
  promise
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
          resolve("Done");        //    ця команда спрацює
          reject("Error");        //  ця буде проігнорована
        }, 2000);
      });
      promise.then(function (result) {
        console.log(result);   // Виведе "Done"
      }, function (error) {
        console.log(error);    // Не спрацює
      });
      


      // ----------------------   ASYNC AWAIT ----------------------------------


async function testAsync() // ключеве слово асинк
{
    return"Done";
}
testAsync().then(console.log); // викликаємо функцію тест асинк і далі від результату її виклику викликаємо then і логуємо результат
// асинхронна функція



// Async in an arrow function

const testAsync = async() => { // перед параметрами ставимо асинк ()
    return "Done";
}
testAsync().then(console.log)



// --------------------- AWAIT ----------------------

// await чекає на виконання асинхронної операції допоки вона не виконається

async function testAwait(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=> resolve ("Ready"), 3000);
        });
        const result  = await promise;
        console.log(result);
}
testAwait()



// ------------------------   Await limitation   -----------------
// can't use await in regular functions

const doSmthAsync = function () {
    return new Promise(resolve => {
        setTimeout(() => resolve("I did smth"), 2000)
    });
};
const doSmth = async function () {
    console.log("Before doSmthAsync");
    console.log(await doSmthAsync())
    console.log("After doSomthAsync");
};

console.log("Before");
doSmth();
console.log("After");

// -- Result:
/* Before
Before doSmthAsync
After
I did smth
After doSomthAsync */

async function func() {
    try {
      const response = await fetch('http://no-such-url');
    } catch(error) {
      console.log(error); // TypeError: failed to fetch
    }
  }
  
  func();
  
