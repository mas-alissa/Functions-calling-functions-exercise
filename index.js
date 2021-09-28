// Hey kiddo

const check = function(age){
if(age >= 18){
    return true;
} else {
    return false;
}
}

const goToCheck = function(age){
    const result = check(age);
    if(result === true){
        return console.log("Hello there");
    }else{
        return console.log("Hey kiddo")
    }
}

goToCheck(17);



//VAT calculations
//VAT exercise 1
const calculateVAT = function(basePrice,vat){
const basePriceinclVAT = basePrice * vat/100;
return basePriceinclVAT; 
}


const callCalculateVAT = function(basePrice,vat){
    const result = calculateVAT(basePrice,vat);
    return result;
}

console.log(callCalculateVAT(2,9))


//VAT exercise 2


const calculate = function(amount,vat){
const basePrice = amount /  (1 + vat);
return [basePrice , vat];
}


const mainfunction = function(amount,vat){
    const result = calculate(amount,vat);

   return result;
}

console.log(mainfunction(1210,0.21))
