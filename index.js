const express = require("express");
const categoryrouter = require("./Router/CategoryRouter");
const app = express();
const PORT = 5000;

const cors = require("cors"); //importing third party middleware

app.use(cors({
    origin: "*" //for accessing from anywhere
}))

// or 

// app.use(cors({
//     origin: ["http://localhost:3000", "https://prepbytes.com"] //->giving permission to specific domain
// }))

const middleware = (req, res, next) => {
    console.log("Middleware running first and then hit api");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Middleware2 is running!");
    next();
}

const middleware3 = (req, res, next) => {
    const age = req.params.age;
    if (age > 18) {
        console.log("login successful");
        next();
        res.send("login success!");
    }
    else {
        console.log("login failed");
        res.send("login failed!");
    }
}

app.use(middleware);
// app.use(middleware2);
// app.use(middleware3);

app.use("/api", categoryrouter);

app.get("/", (req, res) => {
    res.send("This is Home Page!");
    console.log("Home");
})

app.get("/contact", middleware2, (req, res) => {
    console.log("contact page!");
    res.send("Contact Page is running!");
})



app.listen(PORT, () => {
    try {
        console.log("Application is running on Port ", PORT);
    }
    catch (err) {
        console.log("Error Occurred", err);
    }
})