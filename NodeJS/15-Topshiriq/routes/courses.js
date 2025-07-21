import {Router} from 'express';

import {Course, validateCourse} from '../models/course.js'
import { Category } from '../models/category.js';


const router = Router();
// --------------------------------------------------------------------------------
// GET
router.get('/', async (req, res) => {
  const courses = await Course.find().sort('title');
  res.send(courses);
});
// --------------------------------------------------------------------------------
// POST
router.post('/', async (req, res) => {
  const { error } = validateCourse(req.body); 
  if (error) 
    return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) {
    return res.status(400).send('Berilgan IDga teng bo\'lgan toifa topilmadi.');

  }
    const result=await Category.create(req.body)
    await Category.save(result);
  res.send(result);
});
// --------------------------------------------------------------------------------
// PUT
router.put('/:id', async (req, res) => {
  const { error } = validateCourse(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  const category = await Category.findById(req.body.categoryId);
  if (!category) 
    return res.status(400).send('Berilgan IDga teng bo\'lgan toifa topilmadi.');
  const course = await Course.findByIdAndUpdate(req.body, { new: true });
  if (!course) 
    return res.status(404).send('Berilgan IDga teng bo\'lgan kurs topilmadi.');
  res.send(course);
});
// --------------------------------------------------------------------------------
// DELETE
router.delete('/:id', async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  if (!course) 
    return res.status(404).send('Berilgan IDga teng bo\'lgan kurs topilmadi.');

  res.send(course);
});

router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) 
    return res.status(404).send('Berilgan IDga teng bo\'lgan kurs topilmadi.');

  res.send(course);
});

export default router