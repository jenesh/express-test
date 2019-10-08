const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Products Landing Page');
})

router.get('/:product_id', (req, res) => {
    res.send('Specific product landing page');
})

module.exports = router;