const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const helper = require('./libs/helpers.js');

//scraper module gets images from instagram user account
//require('./libs/scraper')(process.argv[2]);

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use((req, res, next) => {
	console.log(req.headers)
	next()
})
app.use(express.static('./turnercontemporary'));

//routes
app.get('/', (req,res) => {
//	res.render('../index.html');
	helper.sendFileList(res);
})

app.listen(3000)