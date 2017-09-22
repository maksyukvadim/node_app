const express = require('express');
const bodyParser = require('body-parser');
import { setUpConnection } from './utils/DataBaseUtils';
const app = express();

app.use(bodyParser.json())

app.get('/notes', (req, res) => {
    res.send('11111'); 
});

app.post('/notes', (req, res) => {
    res.send('lolKEK'); 
});

app.delete('/notes/:id', (req, res) => {
    res.send('lolKEK'); 
});

const server = app.listen(8080, () => {
    console.log('run server');
});
