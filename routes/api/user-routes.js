//format pulled from wk 18 classwork 
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// setup for all users at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// setup for a single user at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


// (placeholder for friend lists)

module.exports = router;
