// const mongoose = require('mongoose');
//
// // mongodb://<User Name>:<Password>@<Host Name/IP Address>:<Port Number>/<MongoDB Database Name>
// // LLU_MONGODB_URI='mongodb://localhost:27017/llu-api';
// LLU_MONGODB_URI='mongodb://localhost:27017/llu-test-api';
// LLU_MONGODB_DATABASE_NAME = 'llu-test-api';
// LLU_MONGODB_COLLECTION_NAME = 'contents';
//
// // Set Mongoose to use ES6 implementation of Promises
// mongoose.Promise = global.Promise;
//
//
// /*
//    Initialize MongoDB Connection via Mongoose
// */
// // mongoose.connect('mongodb://localhost/pokemons');
// mongoose.connect(
//     LLU_MONGODB_URI, {useNewUrlParser: true})
//     .then(() => {
//         console.log("Successfully connected to the database")
//     })
//     .catch((err) => {
//         console.error('Could not connect to the database. Exiting now...', err);
//         process.exit()
//     });
//
// mongoose.connection
//     .once('open', () => {
//         console.log('Connected!')
//     })
//     .on('error', (err) => {
//         console.error('Error : ', err);
//     });
//
// // Called hooks which runs before something.
// beforeEach((done) => {
//     mongoose.connection.collections[LLU_MONGODB_COLLECTION_NAME].drop(() => {
//         // this function runs after the drop is completed
//         done(); // go ahead everything is done now.
//     })
//         .then(() => {
//             console.log("Successfully dropped the collection.")
//         })
//         .catch((err) => {
//             console.error("Error dropping collection!", err)
//         });
// });
