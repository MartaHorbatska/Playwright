/* Task 1. Створіть простий HTTP-сервер за допомогою Node.js, який слухатиме запити на порт 5000.
Сервер має відповідати на різні маршрути наступним чином:
/ - відповідь вітальним повідомленням "Welcome to the new Server!"
/about - у відповідь надайте інформацію про сервер "This is a simple http Node.js server".
/contact - у відповідь укажіть контактну інформацію, наприклад "Contact us at contact@newserver.com".
Будь-який інший маршрут повинен відповісти кодом статусу 404 і повідомленням на зразок "Page not found!".
Переконайтеся, що використовуєте лише нативні модулі Node.js (без зовнішніх бібліотек). */


const http = require('http');
http.
createServer(function(request, response){
  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Welcome to the new Server!');
  } else if (request.url === '/about') {
    response.statusCode = 200;
    response.end('This is a simple http Node.js server');
  } else if (request.url === '/contact') {
    response.statusCode = 200;
    response.end('Contact us at contact@newserver.com');
  } else {
    response.statusCode = 404;
    response.end('Page not found!!!');
  }
})

.listen(5000)
console.log('Server is listening on port 5000');