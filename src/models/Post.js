const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("post", {
    id: { type: DataTypes.INTEGER , allowNull: false, primaryKey: true , autoIncrement: true},
    title: { type: DataTypes.STRING, allowNull: false },
    localidad: { type: DataTypes.STRING , allowNull: false  },
    time: { type: DataTypes.DATE, allowNull: false },
    desc: { type: DataTypes.STRING, allowNull: false },
    empresa: { type: DataTypes.STRING, allowNull: false },
  });
};

