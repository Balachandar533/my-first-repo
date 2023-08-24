const express = require('express');

const {validationResult} = require('express-validator');

const arrayRouter = express.Router();

const {largestNumber, removeDuplicates, sumArrayValue, arrayRotation, palindromeArray} = require('../controllers/array-controller');

const arrayValid = require('../validators/array-validator');

const checkValidation = (req, res, next) => {
    
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.send(error.array());
    }
    next();
};

arrayRouter.get('/largest-number', arrayValid.checkArrayNumeric, checkValidation, largestNumber);

arrayRouter.get('/remove-duplicates', arrayValid.checkArrayEmpty, checkValidation, removeDuplicates);

arrayRouter.get('/sum-array-value', arrayValid.checkArrayNumeric, checkValidation, sumArrayValue);

arrayRouter.get('/array-rotation', arrayValid.arrayRotation, checkValidation, arrayRotation);

arrayRouter.get('/palindrome-array', arrayValid.checkArrayString, checkValidation, palindromeArray);

module.exports = arrayRouter;