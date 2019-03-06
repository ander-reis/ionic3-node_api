const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://administrador:nofood123456@ds221095.mlab.com:21095/nofood'
    },
    Security: {
        secretKey: '5ebe2294ecd0e0f08eab7690d2a6ee69'
    }
};

module.exports = variables;
