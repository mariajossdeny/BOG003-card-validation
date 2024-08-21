const validator = {
 isValid:(creditCardNumber) => {
  //Reciber los numeros
  let totalSum = 0;
  creditCardNumber = creditCardNumber.split("").reverse();


  creditCardNumber.forEach((element, index) => {

     element = parseInt(element)
  
     if(index % 2 === 1){
      element = element * 2;
       
     if(element >= 10){
      element = Math.floor(element/10) + (element%10); 
    }
    }
       totalSum += element;

       let validCard = totalSum % 10 === 0? true:false; 
       return validCard;
 })
    },

       maskify:(creditCardNumber) => {
        if (creditCardNumber.length > 4){
        let quantity = creditCardNumber.length -4;
        console.log("😸".repeat(quantity)+creditCardNumber.substr(-4));
        return "😸".repeat(quantity)+creditCardNumber.substr(-4);
        }

  

 //console.log(validCard)


  


}


};


export default validator;


