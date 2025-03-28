/* Task 1. Створіть простий HTTP-сервер за допомогою Node.js, який слухатиме запити на порт 5000.
Сервер має відповідати на різні маршрути наступним чином:
/ - відповідь вітальним повідомленням "Welcome to the new Server!"
/about - у відповідь надайте інформацію про сервер "This is a simple http Node.js server".
/contact - у відповідь укажіть контактну інформацію, наприклад "Contact us at contact@newserver.com".
Будь-який інший маршрут повинен відповісти кодом статусу 404 і повідомленням на зразок "Page not found!".
Переконайтеся, що використовуєте лише нативні модулі Node.js (без зовнішніх бібліотек). */


// const http = require('http');
// http.
// createServer(function(request, response){
//   if (request.url === '/') {
//     response.statusCode = 200;
//     response.end('Welcome to the new Server!');
//   } else if (request.url === '/about') {
//     response.statusCode = 200;
//     response.end('This is a simple http Node.js server');
//   } else if (request.url === '/contact') {
//     response.statusCode = 200;
//     response.end('Contact us at contact@newserver.com');
//   } else {
//     response.statusCode = 404;
//     response.end('Page not found!!!');
//   }
// })

// .listen(5000)
// console.log('Server is listening on port 5000');

/* Task 2*. Створіть Node.js HTTP-сервер, який читає та обслуговує вміст файлу.
Сервер повинен відповісти на наступне:
/file?name=<ім'я_файлу> - відповідь із вмістом зазначеного файлу, якщо він існує. Якщо файл не знайдено, у відповідь введіть код статусу 404 і повідомлення «File not found!».
Створіть в директорії з файлом сервера, файл data.txt з довільним вмістом. Відповідно, у випадку, коли введено URL-адресу /file?name=data.txt, сервер має прочитати та відповісти вмістом файлу data.txt.
Будь-який інший маршрут повинен відповісти кодом статусу 404 і повідомленням "Invalid route!".
Використовуйте лише нативні модулі Node.js.
Приклад роботи при переході в браузері на http://localhost:5000/file?name=data.txt */

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  // Витягуємо шлях і параметри вручну
  const urlParts = req.url.split("?");
  const route = urlParts[0];
  const query = urlParts[1];

  // Парсимо параметр name (тільки один, простий варіант)
  let filename = null;
  if (query && query.startsWith("name=")) {
    filename = query.slice(5);
  }

  if (route === "/file" && filename) {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("File not found!");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Invalid route!");
  }
})
.listen(5001)
console.log("Server running at http://localhost:5001/");

//http://127.0.0.1:5001/file?name=data.txt