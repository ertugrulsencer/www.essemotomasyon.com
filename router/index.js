const express = require('express');
const { Router } = express;
const main = require('./main');
const router = Router();

/* Get Routes */
router.get('/', (req, res) => res.redirect('/tr'));
router.use(main);
router.use((req, res) => {
	res.status(404).render('errors/_404.ejs');
});

module.exports = router;
