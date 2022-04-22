const Elenco = require('../models/elencoModels');

const findElencoService = async () => {
  const elenco = await Elenco.find();
  return elenco;
};

const findElencoByIdService = async (id) => {
  const elenco = await Elenco.findById(id);
  return elenco;
};

const createElencoService = async (newElenco) => {
  const elencoCriado = await Elenco.create(newElenco);
  return elencoCriado;
};

const updateElencoService = async (id, personagemEdit) => {
  const elencoAtualizado = await Elenco.findByIdAndUpdate(id, personagemEdit);
  return [elencoAtualizado, personagemEdit];
};

const deleteElencoService = async (id) => {
  return await Elenco.findByIdAndDelete(id);
};

module.exports = {
  findElencoService,
  findElencoByIdService,
  createElencoService,
  updateElencoService,
  deleteElencoService,
};
