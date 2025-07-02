const { DataTypes } = require("sequelize");
const db = require("./db");

const Campus = db.define("campus", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Campus;
