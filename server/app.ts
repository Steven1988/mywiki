
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { config } from './config';
// import * as mongo from 'mongodb'


import * as userController from './api/users';
import * as noteRoutes from './api/notesRoute';
import * as authenticate from './api/auth';

export const app = express();

const promise = mongoose.connect('mongodb://localhost:27017/data', {
	useMongoClient: true
});
app.set('superSecret', config.secret);


app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, '../views'));
app.set('view-engine', 'html');
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/*', express.static('../dist/index.html'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "build"), { maxAge: 31557600000 }));


// routes ---
app.get('/api', (req, res) => {
	// return 'index.html';
	res.status(200).json({ name: 'Hello World'});
})
app.get('/api/users', userController.index);
app.post('/api/users/add', userController.add);
app.get('/api/users/:id', userController.user);
app.delete('/api/users/delete/:id', userController.del);

app.get('/api/notes', noteRoutes.index);
app.post('/api/notes/add', noteRoutes.add);
app.delete('/api/notes/del/:id', noteRoutes.del);

app.post('/api/authenticate', authenticate.auth);
app.get('/api/logout', authenticate.logout);





app.listen(app.get('port'), function() {
	console.log(('App is running at http://localhost:%d in %s mode'), app.get("port"), app.get("env"));
});

// module.exports = app;