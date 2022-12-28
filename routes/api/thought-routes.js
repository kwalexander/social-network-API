//format pulled from wk 18 classwork 
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// setup for all thoughts at /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

// setup for creating a Thought at /api/:userid
router
    .route('/:userid')
    .post(createThought);

// get, update and delete thoughts
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// create a reaction
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

// delete a reaction (no need for updating one)
router
    .route('/:thoughtId/reactions/:reactionId')
    .post(deleteReaction)

module.exports = router;