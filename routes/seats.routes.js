// seats.routes.js

const express = require('express');
const router = express.Router();
const SeatController = require('../controllers/seats.controller');

router.get('/seats', SeatController.getAll);
router.get('/seats/:id', SeatController.getById);
router.post('/seats', SeatController.add);
router.put('/seats/:id', SeatController.updateOne);
router.delete('/seats/:id', SeatController.delete);

module.exports = router;