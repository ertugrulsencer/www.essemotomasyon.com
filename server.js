require('dotenv').config();
const express = require('express');
const router = require('./router');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/', express.static('public'));
app.use('/', router);

app.listen(process.env.PORT || 8080, () => {
	console.log('listening on port 8080');
});
