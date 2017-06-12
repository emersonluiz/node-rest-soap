module.exports = function(app) {
    app.get('/rest', function(req, res) {
        console.log('Rest is ready');

        var restClient = new app.services.restClient();
        restClient.getAddress('11060000', function(err, request, response, rtn) {
            if (err) {
                console.log('Error on server');
                res.status(500).send(error)
            }
            res.send(rtn);
        });

    });
}