'use strict';

const app = require('./bin/express');
const variable = require('./bin/configuration/variables');

app.listen(variable.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variable.Api.port}`);
});

module.exports = app;
