const express = require('express');
const router = express.Router();
const { registerUserController, loginUserController } = require('../controller/auth/authcontrollers.js');
const { stripeSubscriptionController } = require('../controller/payment/stripeController.js');
const { protect } = require('../middleware/authMiddleware.js');

// POST /api/v1/registeruser
router.route('/registeruser').post(registerUserController);

// POST /api/v1/loginuser
router.route('/loginuser').post(loginUserController);

// POST /api/v1/createsubscription
router.route('/createsubscription').post(protect, stripeSubscriptionController);

module.exports = router;
