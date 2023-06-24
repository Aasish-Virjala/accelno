const express = require('express');
const router = express.Router();
const { registerUserController, loginUserController } = require('../controller/controllers.js');

// POST /api/v1/registeruser
router.route('/registeruser').post(registerUserController);

// POST /api/v1/loginuser
router.route('/loginuser').post(loginUserController);

module.exports = router;
