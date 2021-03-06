const express = require("express");
var cors = require("cors");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
console.log(process.env.REACT_APP_BOOKS_API_KEY)

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
