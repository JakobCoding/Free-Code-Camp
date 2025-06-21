// Build an Email Masker //

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



