const File = require('../models/File');
const cloudinary = require('cloudinary').v2

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

function isFileTypesSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}
async function uploadFileToCloudinary(file, folder) {
    const options = { folder };
    console.log("temp:-", file.tempFilePath)
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.imageUpload = async (req, resp) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file)


        //  validation 

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type", fileType)

        if (!isFileTypesSupported(fileType, supportedTypes)) {
            return resp.status(400).json({
                success: false,
                message: 'File format not supported !'
            })
        }

        // file format supported 
        console.log(">>>>>>>>>>>>>>")
        const result = await uploadFileToCloudinary(file, "demo")
        console.log('mai thik Chal rha hu')

        // console.log(response)
        //   Save In DB 

        // const fileData = await File.create({
        //     name,
        //     tags,
        //     email,

        // })

        resp.json({
            success: true,
            message: 'Image Successfully Uploaded ! '
        })
    }
    catch (error) {
        console.error(error)
        resp.json({
            success: false,
            message: 'Somethings went Wrong....'
        })

    }
}



exports.videoUpload = async (req, resp) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;
        console.log(file)



        // vallllllll

        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type", fileType)

        if (!isFileTypesSupported(fileType, supportedTypes)) {
            return resp.status(400).json({
                success: false,
                message: 'File format not supported !'
            })
        }


        console.log(">>>>>>>>>>>>>>")
        const result = await uploadFileToCloudinary(file, "demo")
        console.log('mai thik Chal rha hu')


        resp.json({
            success: true,
            message: 'Video Successfully Uploaded ! '
        })
    }


    catch (error) {
        console.error(error)
        resp.json({
            success: false,
            message: 'Somethings went Wrong....'
        })
    }
}