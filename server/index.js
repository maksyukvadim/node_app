const express = require('express');
const bodyParser = require('body-parser');
import * as db from './utils/DataBaseUtils';

db.setUpConnection();
const app = express();

app.use(bodyParser.json())

app.get('/notes', (req, res) => {
    db.listNotes().then((data) => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then((data) => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then((data) => res.send(data));
});

const server = app.listen(8080, () => {
    console.log('runing server port 8080');
});
