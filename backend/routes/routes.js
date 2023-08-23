const express = require('express');
const router = express.Router();
const { registerUserController, loginUserController } = require('../controller/auth/authcontrollers.js');
const {
	stripeSubscriptionController,
	stripeUpdateSubscriptionController,
	stripeCancelSubscriptionController,
} = require('../controller/payment/stripeController.js');
const { getFinancialDataController } = require('../controller/externalAPI/externalDataController.js');
const { protect } = require('../middleware/authMiddleware.js');

// GET /api/v1/getfinancialdata
router.route('/getfinancialdata').get(protect, getFinancialDataController);

// POST /api/v1/registeruser
router.route('/registeruser').post(registerUserController);

// POST /api/v1/loginuser
router.route('/loginuser').post(loginUserController);

// POST /api/v1/createsubscription
router.route('/createsubscription').post(protect, stripeSubscriptionController);

// POST /api/v1/updatesubscription
router.route('/updatesubscription').post(protect, stripeUpdateSubscriptionController);

// POST /api/v1/cancelsubscription
router.route('/cancelsubscription').post(protect, stripeCancelSubscriptionController);

module.exports = router;
