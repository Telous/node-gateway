const ROUTES = [
    {
        url: '/categories',
        rateLimit: {
            windowMs: 60000,// 1 minute. How long we should remember the requests.
            max: 10000, // Limit each IP to requests per `windowMs`
            message: 'Too many accounts created from this IP, please try again after an 1 min',
        },
        proxy: {
            target: "https://api.mercadolibre.com/categories/",
            changeOrigin: true,
            pathRewrite: {
                [`^/categories`]: '',
            },
        }
    },
    {
        url: '/sell',
        rateLimit: {
            windowMs: 60000,
            max: 10,
            message: 'Too many accounts created from this IP, please try again after an 15 min',
        },
        proxy: {
            target: "https://api.mercadolibre.com/sell/",
            changeOrigin: true,
            pathRewrite: {
                [`^/sell`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;