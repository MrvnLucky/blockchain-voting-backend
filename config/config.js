require("dotenv").config({ path: "../.env" });

module.exports = {
  development: {
    username: "root",
    password: "K1ngd0m123!@#",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
