const {check} = require('express-validator');

const checkPagination = [
    
    check('inputValue','Enter valid array value').isArray()
        .custom((value) => {
            if(value?.length === 0) throw new Error('Array value should not be empty');

            return true;
        }),
    check('pageNumber').notEmpty().withMessage('Page Number should not be empty')
                        .isInt().withMessage('Page number should be numeric only'),
    check('elementCount').notEmpty().withMessage('Element count should not be empty')
                        .isInt().withMessage('Element Count should be numeric only')
];

const checkSortArray = [
    
    check('inputValue','Enter valid array value').isArray()
        .custom((value) => {
            if(value.length === 0) throw new Error('Array value should not be empty');

            return true;
        }),
    check('keyName').notEmpty().withMessage('Key name should not be empty')
];

const checkObjectCompare = [
    
    check('objectOne')
        .custom((objectOne) => {
            if(Array?.isArray(objectOne)) throw new Error('Input value one should be object only');

        return true;
    }),

    check('objectTwo')
        .custom((objectTwo) => {
            if(Array?.isArray(objectTwo)) throw new Error('Input value two should be object only');

        return true;
    }),
];

const checkFibonacci = [
    
    check('inputValue').notEmpty().withMessage('Input Value should not be empty')
        .isInt().withMessage('Input Value should be numeric only')
        .custom((value) => {
            if(value < 2)   throw new Error('Invalid');

            return true;
        })
];

module.exports = {
    checkPagination,
    checkSortArray,
    checkObjectCompare, 
    checkFibonacci
};