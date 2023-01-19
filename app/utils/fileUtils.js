const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (Request, file, callback) {
        callback(null, './uploads');
    },
    filename: function (Request, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });
module.exports = upload;