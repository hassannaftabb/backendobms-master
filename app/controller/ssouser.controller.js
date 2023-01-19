const db = {};
const passutils = require('../utils/passwordUtils.js');

const createSSOUser = async (req, res) => {
  try {
    const _exist = await db.SSOUser.findOne({
      where: { ssoId: req.body.ssoId },
    });
    if (!_exist) {
      const _password = passutils.hashPassword(req.body.password);
      const user = await db.SSOUser.create({
        ...req.body,
        password: _password,
      });
      return res.status(201).send({
        success: true,
        message: 'ssouser is created',
        data: user,
      });
    }
    return res.status(409).send({
      success: false,
      message: 'same ssouser record is already exist',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      errorMessage: 'Something went wrong.please try again later',
      error: err.message,
    });
  }
};

const updateSSOUser = async (req, res) => {
  try {
    const { ssoId } = req.body;
    const _exist = await db.SSOUser.findOne({ where: { ssoId: ssoId } });
    if (_exist) {
      const updateUser = await db.SSOUser.update(req.body, {
        where: { ssoId: ssoId },
      });
      return res.status(201).send({
        success: true,
        message: 'ssouser updated sucessfullly',
      });
    }
    return res.status(404).send({
      success: false,
      message: 'ssouser record is not exist',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      errorMessage: 'Something went wrong.please try again later',
      error: err.message,
    });
  }
};

const getSSOByID = async (req, res) => {
  try {
    const ssoId = req.body.ssoId;
    if (ssoId) {
      const user = await db.SSOUser.findOne({
        where: {
          ssoId: ssoId,
        },
        attributes: {
          exclude: ['password'],
        },
      });
      if (user) {
        return res.status(200).send({
          success: true,
          message: 'ssouser record',
          data: user,
        });
      }
      return res.status(404).send({
        success: false,
        message: 'ssouser record not found',
      });
    }

    return res.status(400).send({
      success: false,
      message: 'ssoId is required',
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      errorMessage: 'Something went wrong.please try again later',
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { ssoId, password } = req.body;
    const user = await db.SSOUser.findOne({
      where: {
        ssoId: ssoId,
      },
    });
    if (user) {
      const checkPass = await passutils.comparePassword(
        password,
        user.password
      );
      user.password = '';
      if (checkPass) {
        return res.status(200).send({
          success: true,
          message: 'succesfully login',
          data: user,
        });
      }

      returnres.status(403).send({
        success: false,
        message: 'wrong password',
      });
    }
    return res.status(400).send({
      success: false,
      message: 'wrong ssoid',
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      errorMessage: 'Something went wrong.please try again later',
      error: err.message,
    });
  }
};

module.exports = { createSSOUser, getSSOByID, updateSSOUser, login };
