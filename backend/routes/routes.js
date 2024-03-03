const express = require('express');
const router = express.Router();
const {
	registerUserController,
	loginUserController,
	earlyUserStatusController,
	verifyUserEmailController,
} = require('../controller/auth/authcontrollers.js');
const {
	stripeSubscriptionController,
	stripeUpdateSubscriptionController,
	stripeCancelSubscriptionController,
} = require('../controller/payment/stripeController.js');
const {
	getSingleStockDataController,
	getSingleStockChartController,
	getMarketChartController,
	getMarketMoversController,
	getMostTrendingStocksController,
	getFinancialsController,
	getFiftyTwoWeeksController,
	getStockDetailController,
	getChartbyRangeController,
	getHeatmapController,
} = require('../controller/externalAPI/externalDataController.js');
const { protect } = require('../middleware/authMiddleware.js');
const { getUserProfile, addUserProfile } = require('../controller/dashboard/userProfileController.js');
const { forgotPasswordController, resetPasswordController } = require('../controller/auth/resetPassword.js');

// POST /api/v1/registeruser
router.route('/registeruser').post(registerUserController);

// POST /api/v1/loginuser
router.route('/loginuser').post(loginUserController);

// POST /api/v1/verifyemail
router.route('/verifyemail').post(verifyUserEmailController);

// POST /api/v1/forgotpassword
router.route('/forgotpassword').post(forgotPasswordController);

// POST /api/v1/resetpassword
router.route('/resetpassword').post(resetPasswordController);

// The following route ('/early-user') is only used to update an early user's subscription to active state
// without having to go through the payment process. This is only used for testing & presentation purposes.
// This will only be used if .env  EARLY_USER is set to true and the frontend has a way to trigger this endpoint.
// This is not a part of the actual application flow.

// PUT /api/v1/early-user
router.route('/early-user').put(protect, earlyUserStatusController);

// POST /api/v1/createsubscription
router.route('/createsubscription').post(protect, stripeSubscriptionController);

// POST /api/v1/updatesubscription
router.route('/updatesubscription').post(protect, stripeUpdateSubscriptionController);

// POST /api/v1/cancelsubscription
router.route('/cancelsubscription').post(protect, stripeCancelSubscriptionController);

// POST & GET /api/v1/userprofile
router.route('/userprofile').all(protect).get(getUserProfile).post(addUserProfile);

// GET /api/v1/singlestockdata/:stock
router.route('/singlestockdata/:stock').get(protect, getSingleStockDataController);

// GET /api/v1/singlestockchart/:stock
router.route('/singlestockchart/:stock').get(protect, getSingleStockChartController);

// GET /api/v1/marketchart
router.route('/marketchart').get(protect, getMarketChartController);

//GET /api/v1/marketmovers/:type
router.route('/marketmovers/:type').get(protect, getMarketMoversController);

// GET /api/v1/trendingstocks
router.route('/trendingstocks').get(protect, getMostTrendingStocksController);

// GET /api/v1/financials/:stocks
router.route('/financials/:stocks').get(protect, getFinancialsController);

// GET /api/v1/52weekhighlow/:stock
router.route('/52weekhighlow/:stocks').get(protect, getFiftyTwoWeeksController);

// GET /api/v1/stockdetail/:stock
router.route('/stockdetail/:stock').get(protect, getStockDetailController);

// GET /api/v1/stockchartbyrange/:stock/:range
router.route('/stockchartbyrange/:data').get(protect, getChartbyRangeController);

// GET /api/v1/heatmap/
router.route('/heatmap').get(protect, getHeatmapController);

module.exports = router;
