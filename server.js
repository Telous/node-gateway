const express = require('express');
const {ROUTES} = require("./routes");

const {setupLogging} = require("./log/logging");
const {setupRateLimit} = require("./rate-limit/ratelimit");
const {setupProxies} = require("./proxy/proxy");
const {errorSetup} = require("./error/error");

const app = express()
const port = 4000;

// setupLogging(app);
setupRateLimit(app, ROUTES);
setupProxies(app, ROUTES); //unused for now
errorSetup(app);

app.listen(port, "127.0.0.1", () => {
    console.log(`app is running on port ${port}`);
});