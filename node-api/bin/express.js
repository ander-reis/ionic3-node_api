const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');
const pedidoRouter = require('../routes/pedido-router');

//criando api server
const app = express();

app.use(cors());

//configuração do parse JSON
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));

//configuração mongodb
mongoose.connect(variables.Database.connection, { useNewUrlParser: true, useCreateIndex: true });

//configurando rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/pedido', pedidoRouter);

module.exports = app;
