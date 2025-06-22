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

// console.log(duplexLoanMsg);
// console.log(condoLoanMsg);
// console.log(carLoanMsg);
// console.log(noLoanMsg);

getLoanMessage(annualIncome, creditScore);