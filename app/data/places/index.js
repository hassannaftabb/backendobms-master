const utils = require('../../utils/loadSqlQueries');
const config = require('../../db.config');
const sql = require('mssql');

const getAllPlaces = async () => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries('places');
    const eventsList = await pool.request().query(sqlQueries.getAllPlaces);
    return eventsList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getPlaceById = async (P_ID) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries('places');
    const event = await pool
      .request()
      .input('P_ID', sql.Int, P_ID)
      .query(sqlQueries.getPlaceById);
    return event.recordset;
  } catch (error) {
    return error.message;
  }
};

const createPlace = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries('places');
    const insertEvent = await pool
      .request()
      .input('CITY_ID', sql.Int, data.CITY_ID)
      .input('CITY_NAME_ENG', sql.NVarChar(60), data.CITY_NAME_ENG)
      .input('CITY_NAME_HINDI', sql.NVarChar(60), data.CITY_NAME_HINDI)
      .input('PLACE_ID', sql.Int, data.PLACE_ID)
      .input('PLACE_NAME_ENG', sql.NVarChar(100), data.PLACE_NAME_ENG)
      .input('PLACE_NAME_HINDI', sql.NVarChar(100), data.PLACE_NAME_HINDI)
      .input('PLACE_TYPE', sql.NVarChar(50), data.PLACE_TYPE)
      .input('IS_ACTIVE', sql.Bit, data.IS_ACTIVE)
      .input('INDIAN_CITIZEN_FEE', sql.Int, data.INDIAN_CITIZEN_FEE)
      .input('INDIAN_STUDENT_FEE', sql.Int, data.INDIAN_STUDENT_FEE)
      .input('FOREIGNER_STUDENT_FEE', sql.Int, data.FOREIGNER_STUDENT_FEE)
      .input('FOREIGNER_CITIZEN_FEE', sql.Int, data.FOREIGNER_CITIZEN_FEE)
      .input('OTHER_CITIZEN_FEE', sql.Int, data.OTHER_CITIZEN_FEE)
      .input('CAMERA_FEE', sql.Int, data.CAMERA_FEE)
      .input('GUIDE_FEE', sql.Int, data.GUIDE_FEE)
      .input('VEHICLE_FEE', sql.Int, data.VEHICLE_FEE)
      .input('CREATED_DATE', sql.DateTime, new Date())
      .input('UPDATED_DATE', sql.DateTime, new Date())
      .input('REMARKS', sql.NVarChar(sql.MAX), data.REMARKS)
      .input('ADDRESS', sql.NVarChar(100), data.ADDRESS)
      .input('LONGITUDE', sql.Int, data.LONGITUDE)
      .input('LATITUDE', sql.Int, data.LATITUDE)
      .input('NODAL_DEPARTMENT', sql.NVarChar(100), data.NODAL_DEPARTMENT)
      .input('SITE_IMAGE', sql.NVarChar(100), data.SITE_IMAGE)
      .input('IMAGE_FOR_TICKET', sql.NVarChar(100), data.IMAGE_FOR_TICKET)
      .query(sqlQueries.createPlace);
    return insertEvent.recordsets;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const updatePlaceStatusById = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries('places');
    const update = await pool
      .request()
      .input('P_ID', sql.Int, data.P_ID)
      .input('IS_ACTIVE', sql.Bit, data.IS_ACTIVE)
      .query(sqlQueries.updatePlaceStatus);
    return update.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlaceStatusById,
};
