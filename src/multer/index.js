import multer from 'multer';

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage })

export default upload;

// const storage = multer.diskStorage({
//     destination: (request, file, cb) => {
//         cb(null, './uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// })

// const upload = multer({
//     dest: 'uploads/'
// })