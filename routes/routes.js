const router = require('express').Router()
const userController = require('../controllers/userController');

// User
router.get('/user', userController.fetch)
router.post('/user', userController.create)
router.put('/user', userController.update)
router.delete('/user/:_id', userController.delete)
router.get('/user/:_id', userController.getOne)

module.exports = router