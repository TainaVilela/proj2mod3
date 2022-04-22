const mongoose = require('mongoose');

function connectToDataBase() {
  mongoose
    .connect('mongodb://localhost:27017/personagens-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conectado ao mongoDB');
    })
    .catch((err) => {
      return console.log('Erro na conexão com o banco: ${err}');
    });
}

module.exports = connectToDataBase;
