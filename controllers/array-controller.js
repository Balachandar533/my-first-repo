const express = require('express');

// 1. Task: Find the Largest Number
//    Description: Write a function that takes an array of numbers as input and returns the largest number in the array.

const largestNumber = (req, res) => {
    
    let inputArray = req?.body?.inputValue;
    let largeNumber;
    
    inputArray = inputArray?.flat(Infinity);

    for(let i = 0; i < inputArray?.length;i++){      
        if(largeNumber === undefined){
            largeNumber = +inputArray[i];
        }else if(inputArray[i] > largeNumber){
            largeNumber = +inputArray[i];
        }
    }
    return res?.send(largeNumber +" is the largest number of given values");
};


// 2. Task: Remove Duplicates
//    Description: Write a function that takes an array as input and returns a new array with all duplicate elements removed, 
//    maintaining the original order.

const removeDuplicates = (req, res) => {
    
    let inputArrayValue =  req?.body?.inputValue;    
    let countArray = [];
   
    inputArrayValue = inputArrayValue?.flat(Infinity);
   
    for(let i = 0; i < inputArrayValue?.length; i++){
        if(!countArray?.includes(inputArrayValue[i])){
            countArray?.push(inputArrayValue[i]);
        }
    }
    return countArray?.length > 0 ?  res?.send("Result : "+countArray) : res?.send("Doesn't contain any duplicate values");
};

// 3. Task: Array Sum
//    Description: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

const sumArrayValue = function (req, res) {
  
    let inputArray = req?.body?.inputValue;
    let sumOfArray;

    inputArray = inputArray?.flat(Infinity);
    
    for(let i = 0; i < inputArray?.length; i++){           
        if(sumOfArray === undefined){
            sumOfArray = inputArray[i]; 
        }else if(sumOfArray !== undefined){
            sumOfArray += inputArray[i];                
        }
    }
    return res?.send(sumOfArray?.toString() ?? "To sum the elements, enter valid numeric values");
};

// 4. Task: Array Rotation
//    Description: Write a function that takes an array and a number as input and rotates the elements of the array to the right 
//    by the given number of positions.

const arrayRotation = function (req, res) {
   
    let inputArrayValue = req?.body?.inputValue;
    let position = req?.query?.position;
    let numericArrayValues = [];

    inputArrayValue = inputArrayValue?.flat(Infinity);
    
    inputArrayValue?.filter((currElement) => {
        if(typeof currElement === 'number'){
            numericArrayValues?.push(currElement);
        }else if(typeof currElement === 'string'){      
            if(currElement?.trim().length > 0) numericArrayValues?.push(currElement.trim());
        }
    })        
    if(numericArrayValues.length > 0){
        for(let i = 0; i < position; i++){     
            let popElement = numericArrayValues?.pop();
            numericArrayValues?.unshift(popElement);
        }    
    }
    return numericArrayValues?.length > 0 ? res?.send("Result "+numericArrayValues) : res?.send("Given array doesn't contain any elements");
};

// 5. Task: Palindrome Check
//    Description: Write a function that takes an array of strings as input and returns a new array containing
// only the strings that are palindromes (words that read the same forwards and backward).

//Array palindrome check

const palindromeArray = function (req, res) {
    
    let inputArrayValue = req?.body?.inputValue;
    let palindromeValue = [];

    inputArrayValue = inputArrayValue?.flat(Infinity);
    
    for(let i = 0; i < inputArrayValue?.length; i++){
        
        inputArrayValue[i] = inputArrayValue[i]?.trim()?.toLowerCase();
        let reversedValue = inputArrayValue[i]?.toLowerCase()?.trim()?.split('')?.reverse()?.join('');
        if(inputArrayValue[i] === reversedValue){
            palindromeValue?.push(reversedValue);
        }
    } 
    return (palindromeValue?.length > 0) ? res?.send("Given array contains '"+palindromeValue+"' palindrome words") : res?.send("Given array doesn't contains any palindrome words");  

};

module.exports = {
    largestNumber,
    removeDuplicates,
    sumArrayValue,
    arrayRotation,
    palindromeArray   
};