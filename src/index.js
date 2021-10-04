/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "3000";


/**
 *  App Configuration
 */

app.get('/', (req, res) => {
    res.status(200).send('Welcome to School Portal!');
});

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});