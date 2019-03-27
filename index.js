const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser')
const PORT = 8000;

// app.get('/', (req, res) => {
//     res.send({
//         "saludo": 'Hola mundo!'
//     })
// });

// app.listen(PORT, () => {
//     console.log('Usando el puerto 8000')
// })





// 4.- Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de
// https://swapi.co/
// El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
// {'personaje': {
// 'name': 'Luke Skywalker',
// ...,
// }}


app.get('/api/swapi/:id', (req, res) => {
    let id = req.params.id;
    const url = `https://swapi.co/api/people/${id}`;
    request.get(url, (error, response, body) =>{
        let json = JSON.parse(body);
        res.send(json.name)
    })
});

app.listen(PORT, () => {
    console.log('Usando el puerto 8000')
})