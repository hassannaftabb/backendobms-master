const express = require('express');
require('dotenv').config();
const cors = require('cors');
const route = require('./app/routes/index.routes.js');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', route);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
