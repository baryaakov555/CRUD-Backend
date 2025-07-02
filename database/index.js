const db = require("./db");
const Campus = require("./campus");
const Student = require("./student");
const { Sequelize } = require("sequelize");

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Campus,
  Student
};
