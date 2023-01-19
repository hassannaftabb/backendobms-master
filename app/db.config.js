let encrypt = process.env.SQL_ENCRYPT === 'true';
module.exports = {
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: encrypt, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};
