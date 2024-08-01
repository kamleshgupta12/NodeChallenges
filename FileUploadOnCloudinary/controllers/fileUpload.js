const File = require('../models/File');

exports.localFileUpload = async (req, resp) => {
    try {
        const file = req.files.file;
        console.log("File mil gyi", file);

        // create path where stored img on server 
        let path = __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path Is >>", path)
        file.mv(path, (err) => {
            console.log(err)
        })
        resp.json({
            success: true,
            message: "Local File Uploaded Successfully>>"
        })
    }
    catch (err) {
        console.log("not Able to upload")
        console.log(err)
    }
}