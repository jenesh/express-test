const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('All users in database');
})

router.get('/:user_id', (req, res) => {
    res.send('Specific user profile');
})

module.exports = router;