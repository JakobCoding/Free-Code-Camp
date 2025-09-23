// Build an Email Masker //

/*
In this lab, you will mask the username part of an email address with asterisks. Masking is a term used to hide or replace sensitive information with asterisks or other characters.

For example, if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.

TASKS:
- Create a function named maskEmail that takes email as an argument.
- Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
- Outside the function, declare a variable named email to store the email address you want to mask.
- Call the maskEmail function with the email variable and output the result to the console.
- maskEmail("apple.pie@example.com") should return "a*******e@example.com".
- maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
*/

let email = "jacobcoding@gmail.com";

function maskEmail(email) {
  // 1. Find the position of '@' dynamically (not hardcoded)
  let atIndex = email.indexOf("@");
  
  // 2. Extract LOCAL part: everything BEFORE '@'
  //    - Your version used slice(13), which cuts off most of the email incorrectly
  let local = email.slice(0, atIndex);
  
  // 3. Extract DOMAIN part: everything FROM '@' onward
  //    - Your version used slice(15), which fails if domain isn't exactly that length
  let domain = email.slice(atIndex); // includes '@' automatically
  
  // 4. Get FIRST character of local part
  let firstChar = local[0];
  
  // 5. Get LAST character of local part
  let lastChar = local[local.length - 1];
  
  // 6. Create MIDDLE stars: repeat '*' for (local length - 2)
  //    - -2 because we keep first and last characters
  let middleChars = "*".repeat(local.length - 2);
  
  // 7. Combine all parts
  return firstChar + middleChars + lastChar + domain;
}

console.log(maskEmail(email)); // Test the function



