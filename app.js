const express = require ('express');
const cors = require ('cors');
const mysql = require ('mysql');
const path = require ('path');

const app = express();

app.get('/', function (req, res) {
    res.send('Root and added now');
});

app.listen(3000);