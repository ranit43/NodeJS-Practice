var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb+srv://' + configValues.username + ':' + configValues.pwd + '@cluster0-isyww.mongodb.net/' + configValues.dbName + '?retryWrites=true&w=majority';
    }
}