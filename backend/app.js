const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);

app.listen(process.env.PORT || 8001, () => {
    console.log('Listening on port: ', process.env.PORT);
 }).on('error', (e) => {
    console.error('Error happened: ', e.message)
 });
