//Write a function to Capitalise the first letter of each word in a sentence.

const capitalize = (req, res) => {
    
    let inputValue = req?.query?.inputValue;
    let pascalCase = ""; 
    let splitOfInputValue = inputValue?.trim()?.split(" ");
    for(let i = 0; i < splitOfInputValue?.length; i++){
        let letter = splitOfInputValue[i][0]?.toUpperCase();        
        pascalCase = pascalCase +" "+ splitOfInputValue[i]?.replace(splitOfInputValue[i][0],letter);        
    }
    return res?.send(pascalCase);
};

// Get count of Vowels in given string

const vowelsCount = (req, res) => {
   
    let inputValue = req?.query?.inputValue;
    let vowelsCount = 0;
    let wordString = inputValue?.trim()?.toLowerCase();

    for(let i = 0; wordString?.length > i; i++){
        if(wordString[i] == 'a' || wordString[i] == 'e' || wordString[i] == 'i' || wordString[i] == 'o' || wordString[i] == 'u'){
            vowelsCount++;
        }
    }
    return vowelsCount > 0 ? res?.send("Vowels counts in given string "+vowelsCount) 
                    : res?.send("Doesn't contain any vowel character in given string");
};

//Write a function to find the longest word in a sentence

const longestWord = (req, res) => {
    
    let inputValue = req?.query?.inputValue;   
    let lengthOfWord = 0;
    let longestWord = "";
    let splitOfInputValue = inputValue?.trim()?.split(" ");
    
    if(splitOfInputValue?.length >= 2){
        for(let i = 0; i < splitOfInputValue?.length; i++){           
            if(splitOfInputValue[i]?.length > lengthOfWord){
                longestWord = splitOfInputValue[i];
                lengthOfWord = splitOfInputValue[i]?.length;
            }
        }
        return res?.send("Longest word of given sentence is "+longestWord);                   
    }else{
        return res?.send("Enter minimum two words to get longest word");
    }
};

//Write a function to check if a given string is a palindrome

const palindromeWord = (req, res) => {
    
    let palindromeWord = req?.query?.inputValue;   
    let splitWord = palindromeWord?.toLowerCase()?.split("")?.reverse()?.toString();
    let checkPalindrome = palindromeWord?.split("")?.toString();

    if(splitWord == checkPalindrome){
        return res?.send("The given word is palindrome");
    }else{
        return res?.send("The given word is not a palindrome");
    }
};

//Write a function to reverse a string

const reverseString = (req, res) => {
   
    let inputValue = req?.query?.inputValue;
    let reverseWord = [];
    let splitOfInput = inputValue?.split("");

    for(let i = 0; i < splitOfInput?.length; i++){
        reverseWord?.unshift(splitOfInput[i]);
    }
    return res?.send(reverseWord?.join(''));
};

//Write a function to check if a string contains only unique characters.

const uniqueCharacter = (req, res) => {

    let inputValue = req?.query?.inputValue;      
    let result = true;
    for(let i = 0; i < inputValue?.length; i++){
        for(let j = i+1; j < inputValue?.length; j++){
            if(inputValue[i] == inputValue[j]){
                result = false;
                break;
            }
        }
    }
    return result ? res?.send("Given string '"+inputValue+"' is unique") : res?.send("Given string '"+inputValue+"' is not an unique");
};

module.exports = {
    capitalize,
    vowelsCount,
    longestWord,
    palindromeWord,
    reverseString,
    uniqueCharacter,
};