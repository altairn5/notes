/*##3.  A man, a plan, a canal: Panama!  
Create a function that accepts a string as input and returns a boolean true if it is a palindrome (same spelling forwards and backwards) and false if otherwise.  You may use built-in String and array methods within this function.  

Here's an expected function prototype:
 
`function isPalindrome(a);`

Notice that the function begins with the word is.  Best practice reminds us to prefix any function with a boolean return with a 'has', 'is', or other similar deliniation.  

Specs:

* You may use array manipulation, String manipulation, or a combination of both
* Only test using single words

##Palindrome Stretch Goal
Extend your function to successfully test phrases (without punctuation.)  In the test, blank spaces should not be considered in comparing the forwards and backwards forms of hte phrases.

##Extra Stretchy Goal
Alter your function to only use a single traversal (one loop) of the phrase using any built-in String or array methods EXCEPT reverse.  Hint: Research loops!*/

var panama = process.argv.slice(2);
var string = panama[0];
//var string = "humberto";


function isPalindrome(a){
    var result;

    for(var i = 0; i < a.length; i++){
        
        //a[a.length-1] return the string value no the index value
        if(a[i] === a[a.length - 1 - i]){
    
            console.log(a[i]);
            result = true;
        }
    else
    {
        result = false;
    }
}
    // make sure to leave the return outside the loop or it //will stop it 
    return result;
}
console.log(isPalindrome(string));
