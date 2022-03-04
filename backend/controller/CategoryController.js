const ErrorHandler = require('../helper/ErrorHandler');
const Category = require('../models/Category');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const slugify = require('slugify');


exports.addCategory = catchAsyncErrors(async(req, res, next) => {
    const categoryObj = await Category.create({
        name: req.body.name,
        slug: slugify(req.body.name)
    });

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }
    const cat = new Category(categoryObj);
    cat.save((error, category) => {
        if (error)
            return res.status(400).json({ error });
        if (category) {
            return res.status(201).json({ category });
        }
    })
})