const express = require("express");
// import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { verbose } = require("nodemon/lib/config/defaults");

const PORT = proces.env.PORT || 3001;
const app = express();

// using express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to a database
const db = mysql.createConnection(
  {
    host: "localhost",
    // mysql username
    user: "root",
    database: "departments_db",
  },
  console.log(`connected to the departments_db database.`)
);
// create a department
app.post("/api/new-department", ({ body }, res) => {
  const sql = `INSERT INTO departments (employee_name) VALUES (?)`;
  const params = [body.movie_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});
// read all departments
app.get("/api/departments", (req, res) => {
  const sql = `SELECT id, department_name AS department `;
});
