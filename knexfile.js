module.exports = {
  development: {
    client: 'mssql',
    connection: {
      server: "QTR_LAPTOP",
      database: "ShapeShop",
      user: "crystal_admin",
      password: "Crystal_Admin",
      options: {
        trustedConnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        instanceNAme: "SQLEXPRESS"
      }
    },
    migrations: {
      directory: './backend/migrations'
    },
    seeds: {
      directory: './backend/seeds'
    }
  }
};