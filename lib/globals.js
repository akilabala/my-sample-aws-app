module.exports = {
	applicationPort: 80,
	database: function() {

		console.log('########', process.env.ENVIRONMENT);
		if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'production') {
			var opsworks = require('./../opsworks');
			var opsworksDB = opsworks.db;
			var rdsConnection = {

				host: opsworksDB.host,
				port: opsworksDB.port,
				database: opsworksDB.database,
				user: opsworksDB.username,
				password: opsworksDB.password

			};
			return rdsConnection;
		} else {
			var local = require('./../config/local');
			var localConnection = local.db;
			return localConnection;
		}
	}
}