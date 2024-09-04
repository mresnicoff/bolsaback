const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("usuario", {
    nombre: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull:false,  unique: true       },
    passwordhasheada: { type: DataTypes.STRING},
    empresa: { type: DataTypes.STRING, allowNull:false , primaryKey: true,},
  });
}