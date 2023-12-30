import express from 'express';
import upload from './multer/index.js'
import cloudinary from './cloudinary/index.js';

const app = express();

app.post('/api/upload', upload.single('file'), (request, response) => {
    cloudinary.uploader.upload(request.file.path, (err, result) => {
        if (err) {
            response.status(500).send({ status: false, message: "Error in Cloudinary", error: err })
        }
        else {
            response.send({ status: true, message: 'Uploaded Sucessfully', data: result, file: request.file })
        }
    })
})

app.listen(4000, () => console.log("App Listening in Port : 4000"))