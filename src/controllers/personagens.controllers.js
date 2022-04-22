const mongoose = require('mongoose');
const elencoService = require('../services/elenco.services');

const homePersonagensController = (req, res) => {
  res.send('Veja os personagens da série Versailles');
};

const findPersonagensController = async (req, res) => {
  const allElenco = await elencoService.findElencoService();
  res.send(allElenco);
};

const findPersonagensByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id inválido' });
    return;
  }

  const chosenElenco = await elencoService.findElencoByIdService(idParam);

  if (!chosenElenco) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }
  res.send(chosenElenco);
};

const createPersonagensController = async (req, res) => {
  const elenco = req.body;

  if (!elenco || !elenco.personagem || !elenco.descricao || !elenco.foto) {
    return res
      .status(400)
      .send({ message: 'Todos os dados devem ser preenchidos' });
  }
  const newElenco = await elencoService.createElencoService(elenco);
  res.send(newElenco);
};

const updatePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  const elencoEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id inválido' });
    return;
  }

  if (
    !elencoEdit ||
    !elencoEdit.personagem ||
    !elencoEdit.descricao ||
    !elencoEdit.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Todos os dados devem ser preenchidos' });
  }

  const chosenElenco = await elencoService.findElencoByIdService(idParam);

  if (!chosenElenco) {
    return res
      .status(404)
      .send({ message: 'Personagem não encontrado para ser editado.' });
  }

  const updateElenco = await elencoService.updateElencoService(
    idParam,
    elencoEdit,
  );
  res.send(updateElenco);
};

const deletePersonagensController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id inválido' });
    return;
  }

  const chosenElenco = elencoService.findElencoByIdService(idParam);

  if (!chosenElenco) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }

  await elencoService.deleteElencoService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  homePersonagensController,
  findPersonagensController,
  findPersonagensByIdController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
