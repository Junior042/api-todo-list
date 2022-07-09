const Express = require('express');
const usersRotes = Express.Router();
const UserController = require('../controllers/user/user.ts');

usersRotes.post('/createUser', UserController.createUser);
usersRotes.get('/readUsers', UserController.readAllUsers);
usersRotes.put('/updateUser', UserController.updateUser);
usersRotes.delete('/deleteUser', UserController.deleteUser);

export default usersRotes;