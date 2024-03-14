const db = require("../db/connect");
const util = require("util");

const query = async (statement, values) => {
  return new Promise((resolve, reject) => {
    db.query(
      {
        sql: statement,
        values,
      },
      function (err, rows, fields) {
        // Connection is automatically released when query resolves
        if (err) {
          return reject(new Error(err));
        }
        return resolve(rows);
      }
    );
  });
};

db.getConnection = util.promisify(db.getConnection);

module.exports = { query, conn: db };
