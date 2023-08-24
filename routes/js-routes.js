const express = require('express');

const jsRoutes = express.Router();

const {validationResult} = require('express-validator');

const {pagination, sortArrayObject, objectCompare, fibonacciGenerate, slugCreation} = require('../controllers/js-controller');

const jsValidation = require('../validators/js-validator');

const stringValidation = require('../validators/string-validator');

const checkValidation = (req, res, next) => {
    
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.send(error.array());
    }
    next();
};

jsRoutes.get('/pagination', jsValidation.checkPagination, checkValidation, pagination);

jsRoutes.post('/sort-array-object', jsValidation.checkSortArray, checkValidation, sortArrayObject);

jsRoutes.get('/object-compare', jsValidation.checkObjectCompare, checkValidation, objectCompare);

jsRoutes.get('/fibonacci-generate', jsValidation.checkFibonacci, checkValidation, fibonacciGenerate);

jsRoutes.post('/slug-creation', stringValidation.stringAlpha, checkValidation, slugCreation);

module.exports = jsRoutes;