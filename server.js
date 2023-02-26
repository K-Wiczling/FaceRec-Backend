const express = require("express");
const app = express();
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

// Temporary user database to test if server is working
const database = {
    users: [
        {
            id: "123",
            name: "John",
            email: "john@gmail.com",
            password: "cookies",
            entries: 0,
            joined: new Date(),
        },
        {
            id: "124",
            name: "Sally",
            email: "sally@gmail.com",
            password: "bananas",
            entries: 0,
            joined: new Date(),
        },
    ],
};

// Parsing request to JSON format
app.use(express.json());

// Eneable CORS
app.use(cors());

app.get('/', (req, res) => {
    res.json('oki');
})

// Sign in post route
// For now chack only for the first user in the tmp database
app.post("/signin", (req, res) => {
    console.log(req.body);
    if (
        req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password
    ) {
        res.json("success");
    } else {
        res.status(400).json("error, logging in");
    }
});

// Register new user Route
app.post("/register", (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: "125",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date(),
    });
    res.json(database.users);
}); 

// User get
app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach((user) => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    });
    if (!found) {
        res.status(400).json("no such user");
    }
});

// Increase score
app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach((user) => {
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    });
    if (!found) {
        res.status(400).json("no such user");
    }
});


// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3001, () => {
    console.log("App is runninig on port 3001" );
});
