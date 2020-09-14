const { Router } = require('express');

const router = Router();

router.use('/hello', (req, res) => {
  res.json('hello');
});

module.exports = router;
