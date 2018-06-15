'use strict';

const express = require('express');

// 상수
const PORT = 3000;
const HOST = '127.0.0.1';

// 앱
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
