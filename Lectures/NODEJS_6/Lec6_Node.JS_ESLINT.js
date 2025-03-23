/* // --------------         NODE JS                  ----------------
//node js uses JS on the server
// технологія яка дозволяє виконувати js код і використовується як платформа,
//node.js = runtime environment  + JS library

// node- асинхронна і event driven
// багатопотоковість


//node має багато пекеджів які можна встановлювати через require 
// NPM NODE PACKAGE MANAGER 

// менеджур пакетів нод джієс, і дозволяє працювати з тими пакетами і пекеджаим

npm install <module_name>
npm install express  // встановити локально яктйсь модуль 
npm -v 

npm init // засетапити проект в директорії NodeJS - package name 
//покаже заготовку і створить package.json file 


npm install bootstrap // модуль бутстрап - зявиться норва директорія з сабдиректорією бутстрап
// в пекеджус додасть бутстрап в список в пекедж файлі  

npm i // підтягне всі модулі з файлу package.json
npm ci 

// File system ********************** створення нового файлу, запуск файлу

fs.readFile (path[,options], callback); // path  шлях до файйлу, опшинс то опції, а колбек то функція для обробки потенційної помилки
fs.readFileSync (path[,options]) */

// підключити модуль fs

// const fs = require("fs");
// const { Http2ServerRequest } = require("http2");

// fs.readFile ("info.txt", "utf8", (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

// console.log("async testing")

// fs.writeFile ("newFile.txt", "Hello!!!", (err)=> {
//     if (err){
//         console.log(err)
//     }
// }); // створює новий файл 

// ***************FIRST JS APP ************


// простий node.js server який з FE дає запит на БЕК
// тобто сервер вмітиме приймати реквести і буде дават назад на клієнт



/* //1. Підключаємо модуль hhtp 
const http = require ("http");
//2. 
http.createServer (function (request, response){
// send HTTP header with HTTP status : 200=OK , content type : text/plain 
response.writeHead(200, {'Content-Type': 'text/html});

// send the response body as "Testing NodeJs Server"
response.end('Testing NodeJS server\n');
}).listen(8000); //  задаємо порт на який ми очікуємо запити

//console will print the msg
console.log('Server is running at http://127.0.0.1:8000/')}) */


// const http = require("http");

// http 
// .createServer(function (request, response){
// console.log(request.headers); // вивести заголовки

/* request object має певні properties  
* Headers
* method  : GET POST DELETE PUT 
* url represents requested address
 */


//console.log(request.method);

/* The response parameter controls the response and represents the http.ServerResponse object.
Among its functionality, the following methods can be distinguished:
* statusCode: sets the response status code
* statusMessage: sets the message sent with the status code
* setHeader(name, value): adds one header to the response
* write: writes some content to the response stream
* writeHead: adds a status code and a set of headers to the response
* end: signals to the server that the headers and body of the response are set, as a result, the response is sent to the client.
This method should be called in each request.
 
 */


//Send http header status 200 OK Content type text/plain
// response.writeHead (200,{"Content-Type": "text/plain"});
// // response.end("Testing NodeJS server!!!\n");
// // console.log(response.statusMessage)
// if (request.method == GET){
//     response.end ("<h1>GET-request received </h1>");
// };
// }) 

// .listen(8080); //ERR_UNSAFE_PORT  - Це обмеження безпеки 
// браузера, яке блокує доступ до деяких специфічних портів, e.g. 6000, 1-1023 reserved, 23,25, 6665-6669.
//Console willprint msg
// console.log("Server is running at http://127.0.0.1:8080/");


// ****************   Example 1 ************
// const http = require("http"); 
// http 
// .createServer(function (request, response){
// console.log(request.method); // вивести заголовки
// server.listen(8080, () => {
//     console.log("Server is running at http://127.0.0.1:8080/");
//   });




// ****************   Example 2 ************  // // GET-request received
// const http = require("http"); 

// const server = http.createServer(function (request, response) {
//   response.writeHead(200, { "Content-Type": "text/html" });

//   if (request.method === "GET") {
//     response.end("<h1>GET-request received</h1>");
//   } else {
//     response.end("<h1>Only GET supported</h1>");
//   }
// });

// server.listen(8080, () => {
//   console.log("Server is running at http://127.0.0.1:8080/");
// });



// ****************   Example 3 ************// 
// const http = require("http"); 
// http 
// .createServer(function (request, response){

// //Send http header status 200 OK Content type text/html
// response.writeHead(200, { "Content-Type": "text/html" });
// response.write("<h2>Some message</h2>\n")
// // Відправляємо відповідь клієнту
// response.end("<h1>Header from server</h1>"); 
// })
//  // Запускаємо сервер
// .listen(8080);
// console.log("Server is running at http://127.0.0.1:8080/");


//  end прийнято завершувати 

// ****************   Example 4 ************// 
// -+-+-+ Status code: 200
// -+-+-+ Status message: OK

// const http = require("http"); 
// http 
// .createServer(function (request, response){
// //Send http header status 200 OK Content type html
// response.writeHead(200, { "Content-Type": "text/html" });
// // Логування статусу відповіді (не запиту)
// console.log("Status code:", response.statusCode);        // 200
// console.log("Status message:", response.statusMessage);  // OK

// // Відправляємо відповідь клієнту
// response.end("<h1>Header from server</h1>\n"); 
// })
//  // Запускаємо сервер
// .listen(8080);
// console.log("Server is running at http://127.0.0.1:8080/");

// ****************   Example 5 ************// 

// -+-+-+-+  Get request received  

const http = require("http"); 

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  if (request.method === "GET") {
    response.end("<h1>GET-request received</h1>");
  } 
  if (request.mwthod ==="POST"){
    response.end("<h1>POST-request received</h1>"); // на кожен запит якась інша дія 
  }
  else {
    response.end("<h1>Only GET supported</h1>");
  }
});

server.listen(8080, () => {
  console.log("Server is running at http://127.0.0.1:8080/");
});
