import express from "express";
import { getUsers, 
        createUser, 
        updateUser, 
        getUser, 
        deleteUser,
        getById,
        userProfile,
        userLogin} from '../controllers/users.js'

const router = express.Router();

//all roues in here start with /users
router.get('/', getUsers);

router.post('/new-user', createUser);

router.post('/profile', userProfile)

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

router.get('/:id', getById);

router.post('/login', userLogin);

export default router;