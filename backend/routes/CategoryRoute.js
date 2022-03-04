const express = require('express');
const {
    addCategory
} = require('../controller/CategoryController');

const router = express.Router();

router.route('/categories').get(addCategory);

module.exports = router;