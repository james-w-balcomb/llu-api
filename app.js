/*
   Standard Imports
*/
// Import Express.JS
const express = require('express');
// Import Body Parser Middleware
const bodyParser = require('body-parser');
// Import CORS (Cross-Origin Resource Sharing)
var cors = require('cors');
// Import Mongoose
const mongoose = require('mongoose');
/*
   Custom Imports
*/
// Import dotenv-flow, for .env.development and .env.production and .env.test
const dotEnvFlow = require('dotenv-flow').config();

/*
    Define CONSTANTS
*/
const LLU_API_ADDRESS = process.env.LLU_API_ADDRESS || "127.0.0.1";
const LLU_API_PORT = process.env.LLU_API_PORT || 3300;
const LLU_MONGODB_URI_BASE = process.env.LLU_MONGODB_URI_BASE || "mongodb://localhost:27017/";
const LLU_MONGODB_URI_DATABASE_NAME = process.env.LLU_MONGODB_URI_DATABASE_NAME || "llu-api";
const LLU_MONGODB_URI_COLLECTION_NAME = process.env.LLU_MONGODB_URI_COLLECTION_NAME || "content";
const LLU_MONGODB_URI = process.env.LLU_MONGODB_URI || LLU_MONGODB_URI_BASE + LLU_MONGODB_URI_DATABASE_NAME;
console.log('LLU_API_ADDRESS: %s', LLU_API_ADDRESS);
console.log('LLU_API_PORT: %s', LLU_API_PORT);
console.log('LLU_MONGODB_URI_BASE: %s', LLU_MONGODB_URI_BASE);
console.log('LLU_MONGODB_URI_DATABASE_NAME: %s', LLU_MONGODB_URI_DATABASE_NAME);
console.log('LLU_MONGODB_URI_COLLECTION_NAME: %s', LLU_MONGODB_URI_COLLECTION_NAME);
console.log('LLU_MONGODB_URI: %s', LLU_MONGODB_URI);

const NODE_ENV = process.env.NODE_ENV;
const ENV_PRODUCTION = process.env.ENV_PRODUCTION || 'false';
const ENV_DEVELOPMENT = process.env.ENV_DEVELOPMENT || 'false';
const ENV_TEST = process.env.ENV_TEST || 'false';
console.log('NODE_ENV: %s', NODE_ENV);
console.log('ENV_PRODUCTION: %s', ENV_PRODUCTION);
console.log('ENV_DEVELOPMENT: %s', ENV_DEVELOPMENT);
console.log('ENV_TEST: %s', ENV_TEST);

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
if (NODE_ENV === 'development')
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
app.use('/', routes);

/*
    Launch the Application
*/
app.listen(LLU_API_PORT, LLU_API_ADDRESS, () => console.log(`NodeJS Web App listening at ${LLU_API_ADDRESS}:${LLU_API_PORT}.`));

module.exports = app;
