const { Consumo, } = require("../db.js");
const getDatos = async (req, res) => {

const zona=req.query.zona
var misConsumos
    misConsumos = await Consumo.findAll();

    res.json(misConsumos);
  } 

module.exports = getDatos;
