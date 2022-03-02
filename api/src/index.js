const express = require('express'); // requiero express y lo asigno a una variable
const app = express(); // ejecuto express en la constante app y a partir de el llamamos su metodos
const morgan = require('morgan'); // requerimos morgan

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./routes/index'));

// //Nuestro primer WS Get
// app.get('/', (req, res) => {
// 	res.json({
// 		Title: 'Hola mundo',
// 	});
// });s
//Iniciando el servidor

app.listen(app.get('port'), () => {
	console.log(`Server listening on port ${app.get('port')}`);
});
