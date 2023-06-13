// Import the router from server.js
const router = require('express').Router();

// Serve the home.pug file
router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
    });

// Export the router
module.exports = router;