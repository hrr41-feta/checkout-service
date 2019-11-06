const assert = require("assert");
const cassandra = require("cassandra-driver");
// const authProvider = new cassandra.auth.PlainTextAuthProvider(
//   "cassandra",
//   "cassandra"
// );
const contactPoints = ["127.0.0.1"];
const client = new cassandra.Client({
  contactPoints: contactPoints,
  // authProvider: authProvider,
  localDataCenter: "datacenter1",
  keyspace: "dev"
});

const getEmp = (req, res) => {
  const query = "SELECT * FROM emp";
  client.execute(query, (err, result) => {
    if (err) {
      assert.ifError(err);
    }
    res.status(200).json(result.rows);
  });
};

const addEmp = (req, res) => {
  const first = req.body.emp_first;
  const last = req.body.emp_last;
  const dept = req.body.emp_dept;
  const id = req.body.empid;
  const params = [id, dept, first, last];
  const query = `INSERT INTO emp (empid, emp_dept, emp_first, emp_last) VALUES (?, ?, ?, ?)`;
  client.execute(query, params, { prepare: true }, (err, result) => {
    if (err) {
      assert.ifError(err);
    }
    res.status(200).send("Successfully added");
  });
};

const deleteEmpById = (req, res) => {
  const params = [req.body.empid];
  const query = `DELETE FROM emp WHERE empid = ? IF EXISTS`;
  client.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      assert.ifError(err);
    }
    res.status(200).send("Successfully deleted");
  });
};

const updateFirst = (req, res) => {
  const id = req.body.empid;
  const params = [req.body.emp_first];
  const query = `UPDATE emp SET emp_first = ? WHERE empid = ${id} IF EXISTS`;
  client.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      assert.ifError(err);
    }
    res.status(200).send("Successfully updated");
  });
};

module.exports = {
  getEmp,
  addEmp,
  deleteEmpById,
  updateFirst
};
