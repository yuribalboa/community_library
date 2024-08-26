import userService from '../service/user.services.js';

async function  createUserController(req,res) {
    const newUser = req.body;

    try{
        const user = userService.createUserService(newUser);
        res.status(201).sen({user});
    } catch (err){
        return res.status(400).send(err.message);
    }
}

export default {
    createUserController
}