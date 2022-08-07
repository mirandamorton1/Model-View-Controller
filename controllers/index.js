const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/dashbaord', dashboardRoutes);
router.use('/api, apiRoutes');
router.use('/', homeRoutes);


module.exports = router;