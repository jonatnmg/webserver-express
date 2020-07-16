const http = require('http');


//Crear un servidor (recibe callback)
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Jonathan',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');
