var app = require('./config/config')();

app.listen(3000, function() {
    console.log('Servidor is running on port 3000');
})