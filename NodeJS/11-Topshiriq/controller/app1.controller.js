import { gfs } from '../db.js';
import crypto from 'crypto';
import path from 'path';

const isImage = type => ['image/png', 'image/jpeg'].includes(type);

export const homePage = async (req, res) => {
  if (!gfs) return res.status(500).send('GFS mavjud emas');
  const files = await gfs.find().toArray();
  const listed = files
    .map(f => ({ ...f, isImage: isImage(f.contentType) }))
    .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
  res.render('index', { files: files.length ? listed : false });
};

export const uploadFile = (_, res) => res.redirect('/');

export const getAllFiles = async (_, res) => {
  const files = await gfs.find().toArray();
  res.status(files.length ? 200 : 404).json(files.length ? files : { err: 'bironta ham fayl mavjud emas' });
};

export const getFileByName = async (req, res) => {
  const [file] = await gfs.find({ filename: req.params.filename }).toArray();
  res.status(file ? 200 : 404).json(file || { err: 'bunday fayl mavjud emas' });
};

export const getImage = async (req, res) => {
  const files = await gfs.find({ filename: req.params.filename }).toArray();
  files.length
    ? gfs.openDownloadStreamByName(req.params.filename).pipe(res)
    : res.status(404).json({ err: 'bunday rasm mavjud emas' });
};

export const deleteFile = async (req, res) => {
  try {
    await gfs.delete(new mongoose.Types.ObjectId(req.params.id));
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
