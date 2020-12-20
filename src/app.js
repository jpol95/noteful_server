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

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(errorHandler)
app.use(validateBearerToken);

app.use("/api/folders", folderRouter)
app.use("/api/notes", notesRouter)

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;