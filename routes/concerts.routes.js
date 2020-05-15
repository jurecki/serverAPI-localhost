// concerts.routes.js

const express = require('express');
const router = express.Router();
const ConcertController = require('../controllers/concerts.controller');

// endpoint for concerts
router.get('/concerts', ConcertController.getAll);
router.get('/concerts/:id', ConcertController.getById);
router.post('/concerts', ConcertController.add);
router.put('/concerts/:id', ConcertController.updateOne);
router.delete('/concerts/:id', ConcertController.delete);

module.exports = router;