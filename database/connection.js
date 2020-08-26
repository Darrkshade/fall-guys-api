const mongoose = require('mongoose');
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
	`mongodb+srv://${dbUsername}:${dbPassword}@cluster0.zycmk.mongodb.net/tango-down?retryWrites=true&w=majority`, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

const db = mongoose.connection;

db.once('connected', () => {
	console.log('Connected to Database');
});