 import validator from './validator.js';

      //seccion donde el usuario puede ver mas detalles de su destino preferido:
//opcion1(Houston-texas)
document.getElementById("option1").addEventListener("click",() => {
document.getElementById("houston-texas").style.display ='block';
document.getElementById("merida-vzla").style.display ='none';
document.getElementById("sa-col").style.display ='none';
document.getElementById("sanjcr").style.display ='none';
});

//opcion2(Merida-Venezuela)
document.getElementById("option2").addEventListener("click",()=> {
document.getElementById("houston-texas").style.display='none';
document.getElementById("merida-vzla").style.display='block';
document.getElementById("sa-col").style.display='none';
document.getElementById("sanjcr").style.display='none';
});

//opcion3(San Andres-Colombia)
document.getElementById("option3").addEventListener("click",()=> {
document.getElementById("houston-texas").style.display='none';
document.getElementById("merida-vzla").style.display='none';
document.getElementById("sa-col").style.display='block';
document.getElementById("sanjcr").style.display='none';
});

//opcion4(San Jose Costa Rica)
document.getElementById("option4").addEventListener("click",()=> {
document.getElementById("houston-texas").style.display='none';
document.getElementById("merida-vzla").style.display='none';
document.getElementById("sa-col").style.display='none';
document.getElementById("sanjcr").style.display='block';
});

// bloque para ingresar el codigo de la tarjeta
let carBtn = document.getElementById("car");
let crediNumber = document.getElementById("validator");
 carBtn.addEventListener("click",() => {
    if (validator.isValid(crediNumber.value)) {
    alert("tu tarjeta es valida" + validator.maskify(crediNumber.value));
       } else {
    alert("tu tarjeta es invalida" + validator.maskify(crediNumber.value));
  }

})
