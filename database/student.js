const { DataTypes } = require("sequelize");
const db = require("./db");


const Student = db.define("student", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  gpa: {
    type: DataTypes.STRING,
  },
  campusId: {
    type: DataTypes.Campus,
  },
  imageURL: {
    type: DataTypes.imate,
  },

});

module.exports = Student;
