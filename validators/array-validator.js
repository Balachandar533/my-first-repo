const {check} = require('express-validator');

const checkArrayNumeric = [
    
    check('inputValue','Input value allow only numeric values').isArray()
        .isInt().isFloat()    
        .custom((value) => {
            if(value.length === 0) throw new Error('Array value should not be empty');
            
            return true;
        }),
];

const checkArrayEmpty = [
    
    check('inputValue','Enter valid array value').isArray()   
        .custom((value) => {
            if(value.length === 0) throw new Error('Array value should not be empty');
            
            return true;
        }),
];

const arrayRotation = [
    
    check('inputValue','Enter valid array value').isArray()  
        .custom((value) => {
            if(value.length === 0) throw new Error('Array value should not be empty');
            
            return true;
        }),
    check('position','Enter position value').notEmpty().isInt()
];

const checkArrayString = [
    
    check('inputValue','Input value allow only alpha values').isArray()
        .not().isInt()
        .not().isFloat()
        .custom((value) => {
            if(value.length === 0){
                throw new Error('Array value should not be empty');
            }
            return true;
        }),
];

module.exports = {
    checkArrayNumeric,
    checkArrayEmpty,
    arrayRotation,
    checkArrayString
};