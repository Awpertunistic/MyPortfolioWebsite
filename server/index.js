const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "messagesdb",
});

app.get("/", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      console.log("Error acquiring database connection: " + err);
      res.send("An error occurred.");
      return;
    }

    const sqlInsert =
      "INSERT INTO messages (messageSender, messageText) VALUES ('John', 'Hello testing');";
    connection.query(sqlInsert, (err, result) => {
      connection.release();

      if (err) {
        console.log("Error executing query: " + err);
        res.send("An error occurred.");
        return;
      }

      console.log("Successfully inserted into the database.");
    });
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
