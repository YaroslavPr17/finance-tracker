const express = require('express');
const db = require('../db')

const router = express.Router();

router.get('/spendings', (req, res) => {
    res.json(db.get_all()).status(200);
});

router.post('/spendings/new', (req, res) => {
    const body = req.body;
    console.log(body)

    if (!body.title || !body.money) {
        return res.status(400).json({ error: 'Spending data is not provided or wrong.' });
    }

    db.add(body.title, body.money);
    res.sendStatus(201);
});

router.get('/limit', (req, res) => {
    res.json(db.get_limit().toString()).status(200);
});

router.post('/limit', (req, res) => {
    const body = req.body;
    console.log(body);

    if (!body.limit || typeof(body.limit) != 'number') {
        return res.status(400).json({ error: 'Limit value is wrong or not provided.'});
    }

    db.set_limit(body.limit);
    res.sendStatus(200);
});

router.post('/spendings/get-by-date', (req, res) => {
    const body = req.body;
    console.log(body);

    if (!body.year || !body.month || !body.date) {
        return res.status(400).json({ error: 'Date-related parameters are wrong or not provided.'});
    }

    date = new Date(year=body.year, month=body.month-1, date=body.date);
    
    res.status(201).json(db.get_spendings_by_date(date));
});

module.exports = router;