import { Router } from 'express';
import {Customer, validateCustomer} from '../models/customer.js'

const router = Router();

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    let customer = await Customer.save(req.body);
    res.status(201).send(customer);
});
router.get('/:id', async (req, res) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer)
        return res.status(404).send('Berilgan IDga teng bo\'lgan mijoz topilmadi');

    res.send(customer);
});

router.put('/:id', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    let customer = await Customer.findByIdAndUpdate(req.params.id,req.body, { new: true});
    if (!customer)
        return res.status(404).send('Berilgan IDga teng bo\'lgan mijoz topilmadi');
    res.send(customer);
});

router.delete('/:id', async (req, res) => {
    let customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer)
        return res.status(404).send('Berilgan IDga teng bo\'lgan mijoz topilmadi');

    res.send(customer);
});


export default router