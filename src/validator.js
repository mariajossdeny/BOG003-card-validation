//const validator = {
   /*isValid: (creditCardNumber) => {
      let totalSum = 0;
      creditCardNumber = creditCardNumber.split("").reverse();
    console.log(creditCardNumber)
      creditCardNumber.forEach((element, index) => {
        element = parseInt(element);
    
        if (index % 2 === 1) {
          element *= 2;
          if (element >= 10) {
            element = Math.floor(element / 10) + (element % 10);
          }
        }
        totalSum += element;
        console.log(totalSum)
      });
    console.log(totalSum % 10 === 0)
      // Mover la validación fuera del bucle
      return totalSum % 10 === 0;
      
    },
    

       maskify:(creditCardNumber) => {
        if(creditCardNumber.length > 4){
        let quantity = creditCardNumber.length -4;
        console.log("😸".repeat(quantity)+creditCardNumber.substr(-4));
        return "😸".repeat(quantity)+creditCardNumber.substr(-4);
        }

  

 //console.log(validCard)


  


}


}; */

/* const validator = {
   isValid: (creditCardNumber) => {
     let totalSum = 0;
     creditCardNumber = creditCardNumber.replace(/\s/g, "").split("").reverse();
     console.log("Número de tarjeta invertido:", creditCardNumber);
 
     creditCardNumber.forEach((element, index) => {
       element = parseInt(element);
 
       if (index % 2 === 1) {
         element *= 2;
         if (element >= 10) {
           element = Math.floor(element / 10) + (element % 10);
         }
       }
       totalSum += element;
       console.log("Suma total hasta ahora:", totalSum);
     });
 
     const isValid = totalSum % 10 === 0;
     console.log("Es válida:", isValid);
     return isValid;
   },
 
   maskify: (creditCardNumber) => {
     if (creditCardNumber.length > 4) {
       let quantity = creditCardNumber.length - 4;
       console.log("Tarjeta enmascarada:", "😸".repeat(quantity) + creditCardNumber.substr(-4));
       return "😸".repeat(quantity) + creditCardNumber.substr(-4);
     }
     return creditCardNumber; // Para tarjetas de 4 dígitos o menos
   }
 };  */
 
 // Ejemplo de uso
 //console.log(validator.isValid("4532148803436467")); // Debería devolver true
 //console.log(validator.maskify("4532148803436467")); // Debería mostrar "😸😸😸😸😸😸😸6467"
 
 const validator = {
   isValid: (creditCardNumber) => {
     let totalSum = 0;
     // Eliminar espacios y revertir el número
     creditCardNumber = creditCardNumber.replace(/\s/g, "");
     console.log("Número de tarjeta sin espacios:", creditCardNumber);
     
     creditCardNumber = creditCardNumber.split("").reverse();
     console.log("Número de tarjeta invertido:", creditCardNumber);
 
     creditCardNumber.forEach((element, index) => {
       element = parseInt(element);
       console.log(`Índice: ${index}, Elemento: ${element}`);
 
       // Duplicar cada segundo dígito (índices impares en la cadena invertida)
       if (index % 2 === 1) {
         element *= 2;
         // Si el resultado es 10 o más, sumar los dígitos
         if (element >= 10) {
           element = Math.floor(element / 10) + (element % 10);
         }
       }
 
       totalSum += element;
       console.log("Suma total hasta ahora:", totalSum);
     });
 
     const isValid = totalSum % 10 === 0;
     console.log("Suma total final:", totalSum);
     console.log("Es válida:", isValid);
     return isValid;
   },
 
   maskify: (creditCardNumber) => {
     if (creditCardNumber.length > 4) {
       let quantity = creditCardNumber.length - 4;
       return "😸".repeat(quantity) + creditCardNumber.substr(-4);
     }
     return creditCardNumber;
   }
 };
 
 // Ejemplo de uso
 //console.log(validator.isValid("4532 1488 0343 6464")); // Debería devolver true
 //console.log(validator.maskify("4532148803436464")); // Debería mostrar "😸😸😸😸😸😸😸6467"
 

export default validator;


