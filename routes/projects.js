// Import the router from server.js
const router = require('express').Router();


// Serve the projects.pug file
router.get('/', (req, res) => {
    res.render('projects', { 
        title: 'Projects',
         });
    });

// Export the router
module.exports = router;