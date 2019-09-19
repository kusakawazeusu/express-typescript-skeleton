import express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res:express.Response) {
  res.send('index');
});

export default router;
