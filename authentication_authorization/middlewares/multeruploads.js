const multer = require("multer");

const storage = multer.diskStorage(
    {
        destination:(req, file, cb)=>{
            cb(null, "fileUploads/")
        },
        filename:(req, file, cb)=>{
            cb(null, Date.now()+file.originalname)
        }
    }
)

exports.multerUpload = multer({
    storage:storage,
    fileFilter:(req, file, cb)=>{
        if(file.mimetype.startsWith("image/")){
            cb(null, true)
        }else{
            const err = new Error("file type should be images only like jpg, jpeg, png, svg, web")
            cb(err.message, false)
        }
    },
    limits: {fileSize: 10 * 1024 * 1024 }
})

