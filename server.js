// берём Express из папки node_modules
var express = require('express');

// создаём Express-приложение
var app = express();
// создаём маршрут
// http://localhost:8080/
app.use(express.static(__dirname + '/'));

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');