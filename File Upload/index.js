const express = require('express')
const multer = require('multer');
const app = express();

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname  + "fileUploadTesting" + ".jpg")
        }
    })
}).single("testing");

app.post('/upload', uploadFile, (req, resp) => {
    resp.send("Code Working")
    console.log("Code Working")
})

app.listen(3000, () => {
    console.log("Port is Runing...")
})