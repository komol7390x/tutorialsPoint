import {Router} from 'express'
import {Customer,validateCustomer} from '../models/custemers.models.js'
const router = Router();

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        isVip: req.body.isVip,
        phone: req.body.phone
    });
    customer = await customer.save();

    res.status(201).send(customer);
});

router.get('/:id', async (req, res) => {
  let customers = await Customer.findById(req.params.id);
  if (!customers)
    return res.status(404).send('Berilgan IDga teng bo\'lgan toifa topilmadi');

  res.send(customers);
});

router.put('/:id', async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  let customers = await Customer.findByIdAndUpdate(req.params.id, { name: req.body.name });

  if (!customers)
    return res.status(404).send('Berilgan IDga teng bo\'lgan toifa topilmadi');

  res.send(customers);
});

router.delete('/:id', async (req, res) => {
  let customers = await Customer.findByIdAndRemove(req.params.id);
  if (!customers)
    return res.status(404).send('Berilgan IDga teng bo\'lgan toifa topilmadi');

  res.send(customers);
});

export default router