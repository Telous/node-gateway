const errorSetup = (app) => {
    app.use((req, res, next) => {
        res.status(404).send({
            status: 404,
            error: "Not found"
        });
    })
};

exports.errorSetup = errorSetup;
