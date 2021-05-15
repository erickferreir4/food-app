const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookie = require('cookie');
const cookieParser = require('cookie-parser')
require('dotenv/config');



const products = require('./routes/ProductsRouter')
const app = express();

app.use(cors())
app.use(cookieParser());


//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//carregar arquivos estaticos
app.use(express.static('public'));


//router
app.use('/api', products)

let porta = 8000
app.listen(porta, () => {
    console.log('Servidor em execucao na porta ' + porta)
})
