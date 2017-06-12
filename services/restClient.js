var restify = require('restify');

function RestClient() {
    this._client = restify.createJsonClient({
        url: 'https://viacep.com.br'
    });
}

RestClient.prototype.getAddress = function(cep, callback) {
    this._client.get('/ws/'+cep+'/json', callback);
}

module.exports = function() {
    return RestClient;
}