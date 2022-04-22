const express = require('express');
const router = require('express').Router();

const personagensController = require('../controllers/personagens.controllers');

router.get('/', personagensController.homePersonagensController);

router.get(
  '/find-personagens',
  personagensController.findPersonagensController,
);

router.get(
  '/find-personagens/:id',
  personagensController.findPersonagensByIdController,
);

router.post('/create', personagensController.createPersonagensController);

router.put('/update/:id', personagensController.updatePersonagensController);

router.delete('/delete/:id', personagensController.deletePersonagensController);

module.exports = router;
