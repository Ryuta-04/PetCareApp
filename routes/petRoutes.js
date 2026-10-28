const express = require('express');
const upload = require('../config/upload');
const { isLoggedIn } = require('../middleware/auth');
const petController = require('../controllers/petController');

const router = express.Router();

router.get('/new', isLoggedIn, petController.showNewPet);
router.post('/', isLoggedIn, upload.single('pet_image'), petController.createPet);

module.exports = router;
