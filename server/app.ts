
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'
import * as mongoose from 'mongoose'
// import * as mongo from 'mongodb'

// import * as pug from 'pug'

import * as userController from './api/users'

const app = express();

const promise = mongoose.connect('mongodb://localhost:27017/data', {
	useMongoClient: true
});


app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, '../views'));
app.set('view-engine', 'html');
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/*', express.static('../dist/index.html'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "build"), { maxAge: 31557600000 }));


// routes ---
// app.get('/', function(req, res) {
// 	res.send('Hello World!');
// });
app.get('/api', (req, res) => {
	// return 'index.html';
	res.status(200).json({ name: 'Hello World'});
})
app.get('/api/users', userController.index);
app.post('/api/users/add', userController.add);
app.get('/api/users/:id', userController.user);
app.get('/api/users/delete', userController.del);


app.listen(app.get('port'), function() {
	console.log(('App is running at http://localhost:%d in %s mode'), app.get("port"), app.get("env"));
});

// module.exports = app;