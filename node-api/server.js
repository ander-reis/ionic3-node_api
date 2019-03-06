'use strict';

const app = require('../node-api/bin/express');
const variable = require('../node-api/bin/configuration/variables');

app.listen(variable.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variable.Api.port}`);
});
