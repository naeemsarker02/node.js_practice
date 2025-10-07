const multer = require('multer');
const path = require('path');

// ✅ File filter for safety
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only JPEG, JPG and PNG files are allowed'), false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/user');
    },
    filename: (req, file, cb) => {
        const filename = req.body.name + '-' + Date.now() + path.extname(file.originalname);
        req.body.img = filename;
        cb(null, filename);
    },
});

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

module.exports = upload;
