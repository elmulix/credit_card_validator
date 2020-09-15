//Credit Card Checker
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



// Add your functions below:
// Validate credit card
const validateCred=(array) =>{
    let validate =[];
    let doubleValue;
    let total = 0;
    let j = 0;
    for (let i = array.length -1; i >= 0; i--){
        if (j === 0 || j % 2 === 0) { // First position and everyother position will not multiply by 2
            validate.push(array[i]);
        }
        else { // Multiply by 2
            doubleValue = array[i] * 2;
            if (doubleValue > 9) { // If value is GT 9 
                doubleValue = doubleValue - 9; // Substract 9
            }
            validate.push(doubleValue);
        }
        // console.log(validate[j], i, j);
        total = total + validate[j]; // Adding the total sum of the credits card digits
        j++;
    }
    if (total % 10 === 0){ // If total divided by 10 modulo is 0 then it is a valid Credit Card Number else is Invalid
        return true;
    }else{
        return false;
    }
}
// Find Invalid Credit Cards Function
const findInvalidCards=(array) =>{
    let invalidArray = [];
    for (i = 0; i < array.length; i++) {
        if (!validateCred(array[i])) { //If Credit Card is not valid then create the invalid arrar of cards.
            invalidArray.push(array[i]);
        }
    }
    return invalidArray;
}

// Identify Invalid Credit Card Companies Function
const idInvalidCardCompanies =(array) => {
    let companies = [];
    for (i = 0; i < array.length; i++){
        switch (array[i] [0]) { // Check the first digit of the array
           case 3:
                if(companies.indexOf('Amex (American Express)') === -1){ // if Amex does nor exist in the array, create it.
                    companies.push('Amex (American Express)');
               }
               break;
            case 4:
                if(companies.indexOf('Visa') === -1){ //If Visa does not exists in the array then create it
                    companies.push('Visa');
                }
                break;
            case 5:
                if(companies.indexOf('Mastercard') === -1){ // If Mastercard does not exist in the array then create it
                    companies.push('Mastercard');
                }
                break;
            case 6:
                if(companies.indexOf('Discovery') === -1){ // If Discovery does nor exist in the array then create it
                    companies.push('Discovery');
                }
                break;
           default:
                if(companies.indexOf('Company not found.') === -1){ // If the first digit if not 3,4,5 or 6 create Company not found
                companies.push('Company not found.');
                }
               break;
       } 
    }
    return companies;
}

//Function to convert a string into an array
const convStrToArray =(string) =>{
    if(string.length > 0){
        const nArray = string.split("");
        return nArray;
    }
    return 'Array is empty!';
}
// Main body execute the code

let invalidCards= findInvalidCards(batch); // Find Invalid Credit Cards
console.log('Invalid CC.')
for (let i = 0; i < invalidCards.length; i++){ // Check which card numbers are invalid and print the first digit
  console.log(invalidCards[i] [0], invalidCards[i].join(''), invalidCards[i].length);
}
let invalidCompanies = idInvalidCardCompanies(invalidCards); // Find Invalid companies
console.log('Invalid CC Companies.');
for (let i = 0; i < invalidCompanies.length; i++){ // Print Invalid companies
    console.log(invalidCompanies[i]);
}




