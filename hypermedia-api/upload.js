const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const fileName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, Date.now() + '-' + fileName);
  }
});

// Create the multer instance
const upload = multer({ 
  storage: storage,
  defParamCharset: 'utf8',
	defCharset: 'utf8',
});

module.exports = upload;
