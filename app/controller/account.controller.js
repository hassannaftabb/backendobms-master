const db = {};
const addAccountDetails = async (req, res) => {
  try {
    const { placeId } = req.body;
    if (!placeId) {
      return res.status(400).send({
        success: false,
        message: 'placeId is required',
      });
    }
    const account = await db.AccountDetail.create(req.body);
    return res.status(201).json({
      success: true,
      message: 'account added successfully',
      data: account,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      errorMessage: 'Something went wrong.please try again later',
      error: err.message,
    });
  }
};

const getAccountById = async (req, res) => {
  try {
    const id = req.body.id;
    if (id == null) {
      res.status(400).send({
        success: false,
        errorMessage: 'Id is required',
        error: err.message,
      });
    }
    const account = await db.AccountDetail.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).send({
      success: true,
      message: 'account record',
      data: account,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      errorMessage: 'Something went wrong.please try again later',
      error: err.message,
    });
  }
};

module.exports = { addAccountDetails, getAccountById };
