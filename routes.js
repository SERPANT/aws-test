const { Router } = require('express');

const router = Router();

router.use('/hello', (req, res) => {
  res.json('hawa Samreen');
});

module.exports = router;
