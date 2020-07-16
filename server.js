const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); //por que es un helper y hbs lo detecta, solo debe importarse (o requirse)
const port = process.env.PORT || 3000;

//Midelware es un callback que siempre se ejecuta no importa l url pida
app.use(express.static(__dirname + '/public'));

//Express HBS engine // motor de renderización de plantillas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { }); //pedazos de html que puedo reutilizar

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jonathan'
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        nombre: 'Jonathan'
    });
});

app.get('/data', function (req, res) {
    res.render('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});