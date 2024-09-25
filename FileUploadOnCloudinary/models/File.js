const mongoose = require('mongoose');
const nodemailer = require('nodemailer')

const fileSchem = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    imageUrl: {
        type: String
    },
    tags: {
        type: String
    }

})

fileSchem.post('save', async function(doc) {
    try {
        console.log(doc)
        let transpoter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });
        let info = await transpoter.sendMail({
            from: `CodeGrage - by Kamlesh Gupta`,
            to: doc.email,
            subject: 'File Upload Successfully',
            html: `<h1>Hello Sir</h1> <p> click here: <a href="${doc.imageUrl} >${doc.imageUrl} </a>" </p>`

        })
        console.log("info", info)
    }
    catch (error) {
        console.error(error);
    }
})

const file = mongoose.model("File", fileSchem);
module.exports = file;
