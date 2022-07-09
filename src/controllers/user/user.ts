import { User } from '../../models/modelUser';
import Database from '../../database/config';

class UserController{
    async createUser(req, res){
        const { name, products } = req.body;
        const newUser = new User();
        newUser.name = name;
        newUser.products = products;
        
        try{
            const userRepository = (await Database).getRepository(User);
            await userRepository.save(newUser);

            res.status(200).json({message: 'User Created'});
        }catch(err){
            console.log(err);
            res.status(500).json('Error');  
        }
    }

    async readAllUsers(req, res){
        try{
            const RepositoryUsers = (await Database).getRepository(User);
            const allUsers = await RepositoryUsers.find();
    
            res.status(200).json(allUsers);
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }
    }

    async updateUser(req, res){
        const { body } = req;

        try{
            const RepositoryUsers = (await Database).getRepository(User);
            const userToUpdate = await RepositoryUsers.findOneBy({
                id: body.id
            });

            userToUpdate.products = body.products;

            await RepositoryUsers.save(userToUpdate);
            res.status(200).json({message: 'User updated'});
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }
    }

    async deleteUser(req, res){
        const { body } = req;
        
        try{
            const RepositoryUsers = (await Database).getRepository(User);
            const userRemove = await RepositoryUsers.findBy({
                id: body.id
            });

            await RepositoryUsers.remove(userRemove);

            res.status(200).json({message: 'User removed successfully'});
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }

    }
}

module.exports = new UserController();