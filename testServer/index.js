/* eslint-disable */

const express = require('express')
const { gameList } = require("./data/easy/gameList");
const app = express();
const port = 5009;

// Define a single GET route at the root path
app.get('/', (req, res) => {
	res.json({
		message: 'Hello, World!',
		status: 'success',
		timestamp: new Date().toISOString(),
		data: {
			version: '1.0.0',
			server: 'Express Test Server',
			port: port
		}
	});
});

app.get('/gc/game/list', (req, res) => {
	res.json(gameList);
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
