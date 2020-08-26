const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	playerName: {
		type: String,
		required: true
	},
	crowns: {
		type: Number,
		required: true
	}
}, {
	collection: "fall-guys"
});

playerSchema.pre('save', function () {
	this.lastUpdated = new Date();
})

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;