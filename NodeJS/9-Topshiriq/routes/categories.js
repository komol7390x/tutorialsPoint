import { Router } from 'express';
import {  Category,validateCategory} from '../models/category.js'
const router=Router();

router.get('/', async (_, res) => {
  const categories = await Category.find().sort('name');
  res.send(categories);
});

router.post('/', async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  let category = new Category({
    name: req.body.name
  });
  category = await category.save();

  res.status(201).send(category);
});

router.get('/:id', async (req, res) => {
  let category = await Category.findById(req.params.id);
  if (!category)
    return res.status(404).send('Berilgan IDga teng bo\'lgan toifa topilmadi');

  res.send(category);
});

router.put('/:id', async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  let category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!category)
    return res.status(404).send('Berilgan IDga teng bo\'lgan toifa topilmadi');

  res.send(category);
});

router.delete('/:id', async (req, res) => {
  let category = await Category.findByIdAndRemove(req.params.id);
  if (!category)
    return res.status(404).send('Berilgan IDga teng bo\'lgan toifa topilmadi');

  res.send(category);
});


export default router