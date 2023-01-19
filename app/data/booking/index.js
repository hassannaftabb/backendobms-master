const utils = require('../../utils/loadSqlQueries');
const config = require('../../db.config');
const sql = require('mssql');

const getBookingById = async (B_ID) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries('booking');
    const event = await pool
      .request()
      .input('B_ID', sql.Int, B_ID)
      .query(sqlQueries.getPlaceById);
    return event.recordset;
  } catch (error) {
    return error.message;
  }
};

const createBooking = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries('booking');
    console.log(data, 'data');
    const insertEvent = await pool
      .request()
      .input('SSOID', sql.NVarChar(100), data.SSOID)
      .input('NUMBER_OF_VISITORS', sql.Int, data.NUMBER_OF_VISITORS)
      .input('VISIT_DATE', sql.Date, data.VISIT_DATE)
      .input('CREATED_DATE', sql.Date, data.CREATED_DATE)
      .input('TKT_AMT', sql.Int, data.TKT_AMT)
      .input('TOTAL_TKT_AMT', sql.Int, data.TOTAL_TKT_AMT)
      .input('INDIAN_CITIZEN', sql.Int, data.INDIAN_CITIZEN)
      .input('INDIAN_STUDENT', sql.Int, data.INDIAN_STUDENT)
      .input('FOREIGNER_STUDENT', sql.Int, data.FOREIGNER_STUDENT)
      .input('FOREIGNER_CITIZEN', sql.Int, data.FOREIGNER_CITIZEN)
      .input('GST', sql.Int, data.GST)
      .input('EMAIL_ID', sql.NVarChar(100), data.EMAIL_ID)
      .input('MOBILE_NO', sql.NVarChar(100), data.MOBILE_NO)
      .query(sqlQueries.createBooking);
    return insertEvent.recordsets;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

module.exports = {
  getBookingById,
  createBooking,
};
