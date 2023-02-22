/**
 * library info: https://www.npmjs.com/package/http-proxy-middleware
 * Config proxy params in routes.js file.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

const setupProxies = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
};

exports.setupProxies = setupProxies;