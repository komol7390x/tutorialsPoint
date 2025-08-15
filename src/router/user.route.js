import express from 'express';
import User from '../model/user.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Request body o‘rniga oddiy tayyor object
        const newUserData = {
            name: 'Komol1',
            email: 'komol12@example.com'
        };

        const user = await User.create(newUserData);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/s', async (req, res) => {
    try {
        const newUserData = {
            name: 'Komol',
            email: 'komol@example.com'
        };

        const user = await User.findAll();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;