const {validationResult} = require('express-validator');

const express = require('express');

const stringRouter = express.Router();

const {capitalize, vowelsCount, longestWord, palindromeWord, reverseString, uniqueCharacter} = require('../controllers/string-controller');

const stringValid = require('../validators/string-validator');

const checkValidation = (req, res, next) => {
   
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.send(error.array())
    }
    next();
};

stringRouter.post('/capitalize', stringValid.stringAlpha, checkValidation, capitalize);

stringRouter.post('/vowels-count', stringValid.stringAlpha, checkValidation, vowelsCount);

stringRouter.post('/longest-word', stringValid.stringAlpha, checkValidation, longestWord);

stringRouter.post('/palindrome-word', stringValid.singleWord, checkValidation, palindromeWord);

stringRouter.post('/string-reverse', stringValid.stringAlpha, checkValidation, reverseString);

stringRouter.post('/unique-character', stringValid.stringAlpha, checkValidation, uniqueCharacter);

module.exports = stringRouter;