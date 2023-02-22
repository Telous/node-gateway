/**
 * library info: https://www.npmjs.com/package/morgan
 */
const morgan = require("morgan");

const setupLogging = (app) => {
    app.use(morgan('short'));
}

exports.setupLogging = setupLogging