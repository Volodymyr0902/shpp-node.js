import mysql from "mysql2/promise";
import express  from "express";

const app = express();

async function getPool() {
  return mysql
    .createConnection({
      host: "localhost",
      user: "root",
      port: 3306,
      password: "mysql00$",
      database: "myDB",
      // rowsAsArray: true
    })
}

const pool = await getPool();

async function getAllUsers() {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
}

// const users = await getAllUsers();
// console.log(users);

async function getUserById(id: number) {
  const [rows]: any = await pool.query("SELECT * FROM users WHERE _id = ?", [
    id,
  ]);
  return rows;
}

// const singleUser = await getUserById(1);
// console.log(singleUser);


async function addUser(name: string, age: number, monthSalary: number) {
  const result = await pool.query('INSERT INTO users (name, age, month_salary) VALUES (?, ?, ?)', [name, age, monthSalary])
  return result;
}

const newId = await addUser('larry', 33, 650.85)
console.log(newId)


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server started on localhost on port 3000...`)
})
