
// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

const {getRandomFortune} = require('./dataManager');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.FORTUNE_SERVICE_PORT || 3000; // set our port

// create our router
const router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log({response:res});
    next();
});

router.route('/')
    .get( async (req, res) => {
        //const fortune = await getRandomFortune();
        const fortune = await getRandomFortune();
        console.log(`Sending fortune ${JSON.stringify(fortune)} at ${new Date()}`)
        res.send(fortune ).end();
    });


// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

const server = app.listen(port, () => console.log(`Fortunes service started at ${new Date()} and listening on port ${port}`));
const shutdown = async (signal) => {
    let shutdownMessage;

    if (!signal) {
        shutdownMessage = (`Fortunes service shutting down at ${new Date()}`);
    } else {
        shutdownMessage = (`Signal ${signal} : Fortunes service shutting down at ${new Date()}`);
    }
    const obj = {status: "SHUTDOWN", shutdownMessage, pid: process.pid};
    await server.close(() => {
        console.log(obj);
        process.exit(0);
    });
};


process.on("SIGTERM", () => {
    shutdown("SIGTERM");
});

process.on("SIGINT", () => {
    shutdown("SIGINT");
});

module.exports = {server, shutdown};

