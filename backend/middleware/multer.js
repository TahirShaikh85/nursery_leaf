const multer = require('multer');

// set storage
var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));

        cb(null,file.fieldname + '-' + Date.now() + ext);
    }
})

const upload = multer({storage:storage});

module.exports = upload;
