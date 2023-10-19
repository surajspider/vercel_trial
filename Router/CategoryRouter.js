const { hollycon, bollycon, fitcon, techcon, foodcon } = require("../Controller/CategoryController");

const autho = require("../Middleware/Auth");
const categoryrouter = require("express").Router();

categoryrouter.get("/hollywood", hollycon);
categoryrouter.get("/bollywood", autho, bollycon);
categoryrouter.get("/fitness", fitcon);
categoryrouter.get("/technology", techcon);
categoryrouter.get("/food", foodcon);

module.exports = categoryrouter;