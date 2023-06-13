// Normal start up for local hosting an express server:
const express = require('express');
const app = express();
const port = 5001;
// Make a router:
const router = express.Router();
// Make a path:
const path = require('path');
// Mime to help with file types:
const mime = require('mime');

// Require and use pug:
app.set('view engine', 'pug');
app.set('views', './public/views');

// // Require and use static files:
app.use(express.static('public'));
// // Maybe expose the node_modules folder:
app.use(express.static('node_modules'));
// // // Serve static files
// app.use(express.static(path.join(__dirname, 'public'), {
//     // Set MIME type for .js files
//     setHeaders: function (res, path, stat) {
//       if (path.endsWith('.js')) {
//         res.setHeader('Content-Type', 'application/javascript');
//       }
//     }
//   }));




// Require and use body-parser:
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));




// For ('/') routes, send to routes/home.js by using our router:
app.use('/', require('./routes/home.js'));
app.use('/projects', require('./routes/projects.js'));






app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Export the router:
module.exports = { router };