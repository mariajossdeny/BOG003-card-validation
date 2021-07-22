const validator = {
  isValid:(creditCardNumber) => {
   let sumNumber = 0;
   let totalSum = 0;
//funcion para invertir los numeros
    creditCardNumber=creditCardNumber.split("").reverse();
    //bukle
  for (var i = 0; i < creditCardNumber.length; i++) {
//aplicar la posicion de los numeros pares
      if (i % 2 === 1 ) {
       creditCardNumber[i] = (creditCardNumber[i]*2);
        if (creditCardNumber[i] >= 10) {
        sumNumber=creditCardNumber[i].toString().split("");
      //console.log("el valor" + sumNumber );
      creditCardNumber[i] = parseInt(sumNumber[0]) + parseInt(sumNumber[1]);
      //console.log("suma" + creditCardNumber);

          //console.log( "el valor" + creditCardNumber[i] );
        }


    //  console.log(" position "+i+" :value "+creditCardNumber[i]);
     }
     totalSum = totalSum + parseInt(creditCardNumber[i]);
     //console.log("suma" + totalSum );
  }
   let validCard= totalSum % 10 === 0 ? true: false ;

    return validCard;
  },

  maskify:(creditCardNumber) => {
    if (creditCardNumber.length > 4){
      let quantity = creditCardNumber.length -4;
      console.log("#".repeat(quantity)+creditCardNumber.substr(-4));
      return "#".repeat(quantity)+creditCardNumber.substr(-4);
      }

  }

};

export default validator;
