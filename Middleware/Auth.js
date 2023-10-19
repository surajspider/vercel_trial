const auth = (req, res, next) => {
    console.log("auth middleware");
    const age = 19;
    if (age > 18) {
        console.log("user authorized!")
        next();
    }
    else {
        res.send("user not authorized");
    }
}

module.exports = auth;