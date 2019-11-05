const { Pool } = require("pg");
const pool = new Pool({
  user: "rob",
  host: "localhost",
  database: "checkout",
  password: "zxcv",
  port: 5432
});

//PostgreSQL Sample HTTP requests
const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const reqName = req.body.name;
  const reqEmail = req.body.email;
  console.log(req.body.name);
  pool.query(
    `INSERT INTO users (name, email) VALUES ($1, $2)`,
    [reqName, reqEmail],
    (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.status(201).send(`User added`);
    }
  );
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM users WHERE id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  pool
};