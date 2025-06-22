const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

let loanMsgEl = document.getElementById("loan-msg-el");

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (creditScore >= minCreditScoreForCondo && annualIncome >= minIncomeForCondo) {
    return "You qualify for a condo and car loan."
  } else if (creditScore >= minCreditScoreForCar && annualIncome >= minIncomeForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

function convertInput() {
    // STEP 1: Get the value entered in the annual income input field
    const incomeInput = document.getElementById("income");
     // STEP 2: Get the value entered in the credit score input field
    const creditInput = document.getElementById("credit-score");
    // STEP 3: Convert the input values from strings to numbers for accurate comparison
    const annualIncome = parseInt(incomeInput.value);
    const creditScore = parseInt(creditInput.value);
    // STEP 4: Call your existing getLoanMessage function with the user's input
  const loanMessage = getLoanMessage(annualIncome, creditScore);
  // STEP 5: Grab the paragraph where the result will be displayed
  const resultMessage = document.getElementById("check-el");
  // STEP 6: Update the paragraph's text content with the loan result
  const displayResult = resultMessage.textContent = "Type of loan: " + loanMessage;

}


getLoanMessage(annualIncome, creditScore);