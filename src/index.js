const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middelwares


//Rutas 
app.use(require("./routes/index"));



//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')))


//Escuchando el servidor 
app.listen(3000, () => {
console.log('Server encendido en el puerto', app.get('port'));
});
