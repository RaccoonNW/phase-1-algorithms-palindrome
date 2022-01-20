function isPalindrome(word) {
  let reversed = ""
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i]
  }
  return (reversed === word)
}
/* 
  Take in string
  Create variable to store reversed string
  Loop through each character of string in reverse
  Push reversed characters into variable
  compare reversed string to original string
*/

/*
  isPalindrome takes in a string
  empty variable called reversed will hold new reversed string
  for loop through supplied string in reverse
  compare reversed string to original to return true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("doggod"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
