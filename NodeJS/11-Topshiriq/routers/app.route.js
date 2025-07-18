import express from 'express';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import { configEnv } from '../config/config.js';
import {homePage,uploadFile,getAllFiles,getFileByName,getImage,deleteFile} from '../controller/app1.controller.js';
const {mongoURI}=configEnv

const router = express.Router();

// Storage config
const storage = new GridFsStorage({
  url: mongoURI,
  file: async (_, file) => ({
    filename: (await crypto.randomBytes(16)).toString('hex') + path.extname(file.originalname),
    bucketName: 'uploads',
  })
});

const upload = multer({ storage });

// Routes
router.get('/', homePage);
router.post('/upload', upload.single('file'), uploadFile);
router.get('/files', getAllFiles);
router.get('/files/:filename', getFileByName);
router.get('/image/:filename', getImage);
router.post('/files/del/:id', deleteFile);

export default router;
