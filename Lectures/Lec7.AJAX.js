 <!-- //  AJAX 
 
const result = fetch(url, [options])

// fetch api надає простий інтерфейс 
// fetch вертає promise

async function fetchData (){
    const url = "";
    const response = await fetch (url);
    const data = await response.json(); // fetch вертає проміс значить ми маєм дочекатись на результат виконання 
    // read the response in json format
    console.log(data)
}
fetch(data)

// fetch POST request

const data = {
    title: "name",
    body: "content",
    userId: 1,
  };
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json)); -->
  
/*  requires html format 

    <!DOCTYPE HTML>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    
    <body>
      <button onclick="loadData()">Load data from server</button>
      <div id="dataStorage"></div>
    
      <script>
        async function loadData() {
          try {
            const response = await fetch('https://rubygarage.github.io/'); // замінити на якийсь реальний API
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const content = await response.text(); // Parse text response
            document.getElementById("dataStorage").innerHTML = content;
    
          } catch (error) {
            console.error('Error fetching emails:', error); // Log errors to the console
          }
        }
      </script>
    </body>
    </html>
    
 */
 //  регулярні вирази використовуються для полегшення роьоти з текстом

 // прапорці

 let regexp = new RegExp("pattern", "flags");
 let regexp = /pattern/flags;
 
  // i — нечутливий до регістру (x і X вважаються однаковими)  let regexp = /pattern/i;
  // g — глобальний пошук (знаходить усі входження, а не лише перше)
  // m — багаторядковий режим

  // s — dotAll-режим (крапка . також відповідає символу нового рядка \n)
  // u — підтримка повного Unicode
  // y — пошук із заданої позиції (sticky mode)
 
 // методи регулярних виразів


 
 // ************** exec() **************
// searches string for text that matches regexp
// show with i

const str = "Data transfer started!";
const regExp = /data/i;
const result = regExp.exec(str);
console.log(result); // Data


// ************** test() **************
// searches string for text that matches regexp

const str = "Data transfer started!";
const regExp = /data/i;
const result = regExp.test(str);
console.log(result); // true


// ************** Sets **************
const regExp = /[sk]/;   //  формується в []
const str1 = "test message";
const str2 = "another data";
console.log(regExp.test(str1)); // true
console.log(regExp.test(str2)); // false


// ************** Ranges **************
const regExp1 = /[a-d]/;
const str1 = "test message";
const str2 = "some text";
console.log(regExp1.test(str1)); // true
console.log(regExp1.test(str2)); // false

// exec() — повертає масив з результатом збігу або null.

// test() — повертає true або false, чи є збіг.

// [sk] — шукає будь-яку букву s або k.

// [a-d] — діапазон, шукає будь-яку з літер від a до d.
 
 
const regExp2 = /[6-9]/; // 6,7,8,9 /// хоча б 1 символ має співпасти 
const pin1 = "2145";
const pin2 = "5248";

console.log(regExp2.test(pin1)); // false
console.log(regExp2.test(pin2)); // true

// search Метод search() шукає індекс першого збігу. У цьому випадку, "tex" починається з індексу 5 у рядку "some text here!".

const str = "some text here!";
const re = /tex/;
const result = str.search(re);
console.log(result); // 5 індекс співпадіння 

 // split - Метод split() розбиває рядок по символу ;, використовуючи регулярний вираз.

const re = /;/;
const nameList = "Igor;Ostap;Viktor;Iryna";
console.log(nameList.split(re)); 
// ["Igor", "Ostap", "Viktor", "Iryna"]

// match ()

const str = "John came home and did homework";
const re = /home/g;
const result = str.match(re);
console.log(result); // ["home", "home"]
// Шукає всі входження слова home у рядку.
// Прапор g — глобальний пошук.
// Повертає масив усіх знайдених входжень.


const str = "+38(093)-458-22-76";
console.log(str.match(/\d+/g));
// \d+ — одна або більше цифр.
// Повертає: ["38", "093", "458", "22", "76"]

console.log("100 10 1".match(/10?/g));
// 10? — 1 обов’язкова, 0 необов’язкова
// Збіги: ["10", "10", "1"]
// (бо 10, 10, і в останньому випадку — просто 1, бо 0? дозволяє його відсутність)



// *************   метасимволи   *************

// \d	Відповідає будь-якій цифрі, еквівалентно [0-9]
// \D	Відповідає будь-якому символу, що не є цифрою, еквівалентно [^0-9]
// \w	Відповідає будь-якому алфавітно-цифровому символу (включаючи _), еквівалентно [A-Za-z0-9_]
// \W	Відповідає будь-якому символу, що не є алфавітно-цифровим, тобто всьому, крім [A-Za-z0-9_]
// \s	Відповідає пробільному символу: пробілу, табуляції, переносу рядка
// \S	Відповідає будь-якому символу, що не є пробілом
// \0	Відповідає null-символу
// \n	Відповідає символу нового рядка
// .	Відповідає будь-якому символу, окрім нового рядка (\n)


  // ************          Кількісні модифікатори (Quantifiers):
   
  // +	Відповідає одному або більше повторенням попереднього символу.
  // *	Відповідає будь-якій кількості повторень попереднього символу, включно з нулем (тобто може бути відсутнім).
  // ?	Робить символ необов’язковим (0 або 1 раз).
  // {n}	Точно n повторень попереднього символу.
  // {n,}	Не менше n повторень.
  // {n,m}	Від n до m повторень.
  // ^	Відповідає початку рядка.
  // $	Відповідає кінцю рядка.

// /a+/ — одна або більше літер a

// /\d{2,4}/ — від 2 до 4 цифр

// /^Hello/ — рядки, які починаються з "Hello" 
    //   Підійде до: "Hello world"
    //   Не підійде до: "Well, Hello world"

    // ^$
    // Відповідає порожньому рядку — початок одразу перед кінцем.

    // ^[A-Z]
    // Відповідає рядку, що починається з великої літери.

// /end$/ — рядки, які закінчуються на "end"

// /\w?/ — нуль або одна літера, цифра або підкреслення

 // ************** Metacharacters & Quantifiers

 const str = "+38(093)-458-22-76"; 
 console.log(str.match(/\d+/g)); // Знаходить всі послідовності з однієї або більше цифр.\nРезультат: ['38', '093', '458', '22', '76']"
 console.log("100 10 1".match(/\d*/g));  // Знаходить будь-яку кількість цифр (включно з 0).\nРезультат: ['100', '', '10', '', '1', '']"
 console.log("100 10 1".match(/10?/g)); // "Знаходить '1', за якою йде 0 або 1 '0'.\nРезультат: ['10', '10', '1']"),
 console.log("My vacation is not 2, but 22 days".match(/\d{2,3}/g)); // Знаходить групи з 2 або 3 цифр.\nРезультат: ['22']"
 console.log(/^\d{4}\w{1,3}$/.test("1000PRO")); // Перевіряє, чи рядок складається з 4 цифр і 1–3 алфавітно-цифрових символів.\nРезультат: true"
 
 // ************** Escaping заміняє спец символ
 console.log("Paragraph 2.3".match(/\d\.\d/));  // 2.3
 console.log("Paragraph 223".match(/\d\.\d/));  // null
 

//task4
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Email list</title>
   </head>
 <body>
   <h2>Email list</h2>
   <button onclick="getEmailsButton()">Get emails</button>
   <ul id="emailList"></ul>
   
   <script>
   function getEmailsButton() {
     fetch('https://fakestoreapi.com/users')
       .then(response => {
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
       })
       .then(users => {
         const list = document.getElementById('emailList');
         list.innerHTML = ''; // очищаємо список перед новим рендером
         users.forEach(user => {
           const li = document.createElement('li');
           li.textContent = user.email;
           list.appendChild(li);
         });
       })
       .catch(error => {
         console.error('Error fetching emails: ' + error);
       });
   }
 </script>
 </body>
 </html>