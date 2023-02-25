const express = require('express');

const app = express();

app.post('/', (req,res) => {
    res.send('Working...' );
})

app.listen(3000, () => {
    console.log('App is runninig on port 3000');
})
/*
/ --> working...
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/