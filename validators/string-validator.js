const {check} = require('express-validator');

const singleWord = [
    
    check('inputValue','Input value should not be empty').trim().notEmpty(),
    check('inputValue','Invalid String Value').trim()
        .matches(/[A-Za-z]/)
];

const stringAlpha = [
    
    check('inputValue','Input value should not be empty').trim().notEmpty(),
    check('inputValue','Invalid String Value').trim()
        .matches(/^[ A-Za-z]+$/)
];

module.exports = {
    singleWord,
    stringAlpha
};