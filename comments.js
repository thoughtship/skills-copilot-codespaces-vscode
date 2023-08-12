// Create web server
// 1. Create web server
// 2. Create router
// 3. Create routes
// 4. Start web server

// 1. Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 2. Create router
const router = require('./routes');

// 3. Create routes
app.use(bodyParser.json());
app.use(router);

// 4. Start web server
app.listen(3000, () => {
    console.log('Server started');
});

