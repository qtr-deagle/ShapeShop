const sql = require("mssql");

const config = {
  server: "QTR_LAPTOP",
  database: "ShapeShop",
  user: "crystal_admin",
  password: "Crystal_Admin",
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    trustServerCertificate: true,
    instanceNAme: "SQLEXPRESS"
  },
};

module.exports = {
    sqlconnect: () => sql.connect(config),
    sqlclose: () => sql.close(),
};
