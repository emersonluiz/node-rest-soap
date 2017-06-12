var soap = require('soap');

function SoapClient() {
    this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
}

SoapClient.prototype.timeCalculation = function(args, callback) {
    soap.createClient(this._url, function(err, client) {
        console.log('Client was created');
        client.CalcPrazo(args, callback);
    });
}

module.exports = function() {
    return SoapClient;
}