// const axios = require('axios');
// const mongoose = require("mongoose");

// // Require all models
// const db = require("../models");

// // Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// module.exports = function (app) {
//     // Route for saving a specific Article by id
//     app.put("/articleSave/:id", function (req, res) {
//         // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//         db.Article.updateOne(
//             { _id: req.params.id },
//             { $set: { saved: true } }
//         )
//             .then(function (dbArticle) {
//                 // If we were able to successfully find an Article with the given id, send it back to the client
//                 console.log(dbArticle)
//                 res.json(dbArticle);
//             })
//             .catch(function (err) {
//                 // If an error occurred, send it to the client
//                 res.json(err);
//             });
//     });

//     // Route for unsaving a specific Article by id
//     app.put("/articleUnsave/:id", function (req, res) {
//         // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//         db.Article.updateOne(
//             { _id: req.params.id },
//             { $set: { saved: false } }
//         )
//             .then(function (dbArticle) {
//                 // If we were able to successfully find an Article with the given id, send it back to the client
//                 console.log(dbArticle)
//                 res.json(dbArticle);
//             })
//             .catch(function (err) {
//                 // If an error occurred, send it to the client
//                 res.json(err);
//             });
//     });

//     app.get("/savedArticles", function (req, res) {
//         db.Article.find({ saved: true })
//             .then(function (dbArticle) {
//                 console.log(dbArticle);
//                 hbsObject = {
//                     Articles: dbArticle
//                 };
//                 res.render("saved", hbsObject)
//                 // res.json(hbsObject)
//             })
//             .catch(function (err) {
//                 // If an error occurred, send it to the client
//                 res.json(err);
//             });

//     });


// }