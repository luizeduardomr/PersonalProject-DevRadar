const express = require('express'); 
const mongose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');

const app = express();



mongose.connect('mongodb+srv://luiz:admin@cluster0-9npnw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);



//Métodos HTTP  -->   get, post, put (editar), delete

//Tipos de parâmetros:
// Query Params: request.params (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body (Params): request.body (Dados para criação ou alteração de registro)


//MongoDB (Não-relacional)
app.listen(3333);
