const express = require('express');
const router = express.Router();

router.get('/:user_id', (req, res) => {
    res.send('Specific specific user\'s oders');
})

module.exports = router;