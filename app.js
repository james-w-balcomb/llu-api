/*
   Standard Imports
*/
// Import Express.JS
const express = require('express');
// Import Body Parser Middleware
const bodyParser = require('body-parser');
// Import CORS (Cross-Origin Resource Sharing)
const cors = require('cors');
// Import Mongoose
const mongoose = require('mongoose');
/*
   Custom Imports
*/
// Import dotenv-flow, for .env.test, .env.development, and .env.production
const dotEnvFlow = require('dotenv-flow').config();

/*
    Define CONSTANTS
*/
const LLU_API_ADDRESS = process.env.LLU_API_ADDRESS || "127.0.0.1";
const LLU_API_PORT = process.env.LLU_API_PORT || 3300;
const LLU_MONGODB_URI = process.env.LLU_MONGODB_URI || "mongodb://localhost:27017/llu-api";
console.log('LLU_API_ADDRESS: %s', LLU_API_ADDRESS);
console.log('LLU_API_PORT: %s', LLU_API_PORT);
console.log('LLU_MONGODB_URI: %s', LLU_MONGODB_URI);

/*
    Initialize the Application
*/
const app = express();

/*
   Configure Body Parser
*/
// parse application/x-www-form-urlencoded (AKA Form-Data)
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/*
    Configure Mongoose
 */
mongoose.set('debug', true);

/*
   Initialize MongoDB Connection via Mongoose
*/
mongoose.connect(
    LLU_MONGODB_URI, {useNewUrlParser: true})
    .then(() => {console.log("Successfully connected to the database");})
    .catch(err => {console.error('Could not connect to the database. Exiting now...', err);process.exit();});

/*
    Allow Cross-Domain
 */
app.use(cors());

/*
    Set default API response
*/
app.get('/', (req, res) => { res.send('hello, world') });

// Import routes
let routes = require("./routes");

// Use Api routes in the App
app.use('/api/v1', routes);

/*
    Launch the Application
*/
app.listen(LLU_API_PORT, LLU_API_ADDRESS, () => console.log(`NodeJS Web App listening at ${LLU_API_ADDRESS}:${LLU_API_PORT}.`));

module.exports = app;
