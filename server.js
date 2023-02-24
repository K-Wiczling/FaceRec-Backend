const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const n = (Number(req.query.id) * Number(req.query.di)).toString();
    res.send(n);
});

app.listen(3000)