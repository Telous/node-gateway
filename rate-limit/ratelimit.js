/**
 * library info: https://www.npmjs.com/package/express-rate-limit
 * Config rate-limits params in routes.js file.
 */
const rateLimit = require("express-rate-limit");
const requestIp = require('request-ip');


const setupRateLimit = (app, routes) => {

    routes.forEach(r => {
        if (r.rateLimit) {
            app.use(r.url, rateLimit(r.rateLimit));
        }

    })
};
function asd( req, res, next) {
    console.log(req)
    next();
}
exports.setupRateLimit = setupRateLimit;