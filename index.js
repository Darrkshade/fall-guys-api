require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const Player = require('./database/models/playerModel')

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

require('./database/connection.js');

app.get('/', (req, res) => {
	res.json({
		msg: 'Welcome to the TD Fall Guys API'
	});
});

app.get('/getPlayers', async (req, res) => {
	try {
		const allPlayers = await Player.find({});
		res.send(allPlayers);
	} catch (e) {
		res.send(e);
	}
});

app.post('/createPlayer', async (req, res) => {
	try {
		const reqBody = req.body;
		const newPlayer = await Player.create(reqBody);

		res.status(200).send(newPlayer);
	} catch (e) {
		res.send(e);
	}
})

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});