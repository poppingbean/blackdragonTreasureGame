const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

let gameState = {
    inventory: {
        keys: 0,
        treasures: 0,
        wood: 0,
        iron: 0,
        stone: 0,
        items: 0
    },
    endTime: null,
    keyAvailable: false
};

app.get('/state', (req, res) => {
    res.json(gameState);
});

app.post('/state', (req, res) => {
    gameState = req.body;
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
