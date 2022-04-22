const mongoose = require('mongoose');

const ElencoSchema = new mongoose.Schema({
  personagem: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
});

const Elenco = mongoose.model('elenco', ElencoSchema);

module.exports = Elenco;
