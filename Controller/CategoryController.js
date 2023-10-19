const { bollywood, hollywood, fitness, technology, food } = require("../dummyData");

const bollycon = (req, res) => {
    return res.send(bollywood);
}

const hollycon = (req, res) => {
    return res.send(hollywood)
}

const fitcon = (req, res) => {
    return res.send(fitness);
}

const techcon = (req, res) => {
    return res.send(technology);
}

const foodcon = (req, res) => {
    return res.send(food);
}
module.exports = { hollycon, bollycon, fitcon, techcon, foodcon };