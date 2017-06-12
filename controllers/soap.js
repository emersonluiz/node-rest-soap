module.exports = function(app) {
    app.get('/soap', function(req, res) {
        console.log('Soap is ready');

        var soapClient = new app.services.soapClient();
        soapClient.timeCalculation(
            {
                'nCdServico':'40010',
                'sCepOrigem':'11060000',
                'sCepDestino':'11070000'
            },
            function(err, result) {
                if(err) {
                    console.log('Error on server');
                    res.status(500).send(err);
                }
                res.send(result);
            }
        );
    });
}