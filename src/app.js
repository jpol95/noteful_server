require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require('./config')
const validateBearerToken = require('./middleware/bearer-token')
const errorHandler = require('./middleware/error-handler')
const folderRouter = require('./folders/folders-router')
const notesRouter = require('./notes/notes-router')

const app = express();

const morganOption = (NODE_ENV === 'production')

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

app.use(cors());
app.options('*', cors()); 
app.use(allowCrossDomain)
app.use(morgan(morganOption));
app.use(helmet());


app.use(errorHandler)
app.use(validateBearerToken);

app.use("/api/folders", folderRouter)
app.use("/api/notes", notesRouter)

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
