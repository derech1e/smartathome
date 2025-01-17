require('dotenv').config()
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const bodyParser = require('body-parser')
const timersRouter = require("./routes/timers");
const pumpRouter = require("./routes/pump");
const logbookRouter = require("./routes/logbook");
const radioRouter = require("./routes/radio");
const printerRouter = require("./routes/printer");
const recipeRouter = require("./routes/recipe");
const errorHandlerMiddleware = require("./utils/error-handler.js");

const PORT = process.env.PORT || 4000;
let database = process.env.NODE_ENV === 'production' ? 'mongodb://admin:minda@134.255.234.93:3002/storage?authSource=admin&retryWrites=true&w=majority' : 'mongodb+srv://admin:admin@cluster0.lomum.mongodb.net/unitTest?retryWrites=true&w=majority';

const FileSync = require("lowdb/adapters/FileSync");
const helmet = require("helmet");
const XLSX = require('xlsx')
const mongoose = require("mongoose");
const {cleanupTimers} = require("./utils/schedules");

const adapter = new FileSync("db.json");
const db = low(adapter);


mongoose.connect(database, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

db.defaults({timer: []}).write();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ["./routes/*.js"],
};

cleanupTimers(db);

const specs = swaggerJsDoc(options);
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.db = db;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/pump", pumpRouter);
app.use("/pump/timers", timersRouter);
app.use("/logbook", logbookRouter);
app.use("/radio", radioRouter);
app.use("/printer", printerRouter);
app.use("/recipe", recipeRouter);

app.use(errorHandlerMiddleware);
app.listen(PORT, () => console.log(`The server is running on port http://localhost:${PORT} \n Server Ready!`));

module.exports = app;
