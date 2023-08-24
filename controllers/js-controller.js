const express = require('express');

// 1. Task: Pagination Function
//    Description: Write a function that takes an array and a page number as input and returns 
//    a new array containing the elements for the specified page based on a given page size. 
//    Implement error handling to check for valid inputs.

const pagination = (req, res) => {
    
    let inputArray = req?.body?.inputValue;
    let pageNo     = req?.query?.pageNumber;
    let dispElementCount = req?.query?.elementCount;

    try{        
        let arryResult = [];
        inputArray = inputArray?.flat(Infinity);
        
        if(inputArray?.length === dispElementCount && pageNo > 1){
            return res?.send("Nothing to display");
        }else{
            let fromElement = (dispElementCount * (pageNo - 1));
            let endElement = fromElement + dispElementCount;
            arryResult =  inputArray?.slice(fromElement, endElement);
        }
        throw Error({message:'hfjhk'});
        return arryResult?.length > 0 ? res?.send("Result "+arryResult) : res?.send("Nothing to display");

    }catch(error){
        console.log(error);
        return res?.end({error:''});
    }
};


// 2. Task: Sorting Array of Objects by Property
//    Description: Write a function that takes an array of objects and a property name as input 
//    and returns a new array of objects sorted by the specified property in ascending order. 
//    Handle cases where the input is not a valid array of objects.

const sortArrayObject = (req, res) => {
   
    let employee = req?.body?.inputValue;
    let propertyName = req?.query?.keyName;

    try{
        for(let i = 0; employee?.length > i; i++){
            objectKeys = Object?.keys(employee[i]);
            if(!Object?.keys(employee[i])?.includes(propertyName)){
                throw new Error("Could not find entered keyword.");
            }
        }
        let sortedArray = employee?.sort((initElement, nextElement) => {
            if (initElement[propertyName] < nextElement[propertyName])    return -1;
            initElement[propertyName] > nextElement[propertyName] ? 1 : 0;
        });
        return res?.send(sortedArray);
    }catch(error){
        return res?.end(error.message);
    }
};


// 3. Task: Object Deep Comparison
//    Description: Write a function that takes two objects as input 
//    and compares them to check if they are deeply equal (i.e., have the same properties and values). 
//    Implement error handling to check for valid object inputs.

const objectCompare = (req, res) => {
    
    let objectOne = req?.body?.objectOne;
    let objectTwo = req?.body?.objectTwo;

    try{
      
        let objectOneKeys = Object?.keys(objectOne);
        let objectTwoKeys = Object?.keys(objectTwo);

        //Compare key length
        if(objectOneKeys?.length === objectTwoKeys?.length){
            
            objectOneKeys = objectOneKeys?.sort();
            objectTwoKeys = objectTwoKeys?.sort();
            
            //compare keys only
            for(let i = 0; i < objectOneKeys?.length; i++){         
                if(objectOneKeys[i] !== objectTwoKeys[i]){
                    res.end("Given both objects are not equal");
                }    
            }

            //compare values
            for(let prop of objectOneKeys){
                if(objectOne[prop] !== objectTwo[prop]){
                    res.end("Given both objects are not equal");
                }
            }
            return res?.send("Given both objects are equal");
        }else{
            return res?.end("Given both objects are not equal");
        }

    }catch(error){
        return res?.end(error);
    }
};

// 4. Task: Fibonacci Sequence Generator
//    Description: Write a function that generates a Fibonacci sequence up to a specified number of terms 
//    and returns an array with the sequence. Implement error handling to check for non-numeric or non-positive integer inputs.
// Fibonacci Sequence - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

const fibonacciGenerate = (req, res) => {
    
    let inputValue = req?.query?.inputValue;
    try{      
        
        let fibonacciArray = [];
        fibonacciArray?.push(0, 1);

        for(let i = 0; i < inputValue - 2; i++){
            let value = fibonacciArray[i] + fibonacciArray[i+1];
            fibonacciArray?.push(value);
        }
        return res.send(fibonacciArray);

    }catch(error){
        return res?.end(error.message);
    }
};

// 5. Task: URL Slug Creator
//    Description: Write a function that takes a string as input and converts it into a URL slug 
//    (i.e., lowercased, with spaces replaced by dashes). Implement error handling to check for valid string inputs.
//      "https://www.ippopay.com/"payment-gateway

const slugCreation = function (req, res) {
   
    let inputValue = req.query.inputValue;
    let baseUrl = "https://www.ippopay.com/";

    try{

        inputValue = inputValue?.trim()?.toLowerCase();
        inputValue = inputValue?.replaceAll(" ","-");
        let returnUrl = baseUrl + inputValue;
        
        return res?.send(returnUrl);

    }catch(error){
        return res?.end(error.message);
    }
};

module.exports = {
    pagination,
    sortArrayObject,
    objectCompare,
    fibonacciGenerate,
    slugCreation
};