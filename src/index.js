import validator from './validator.js';



/* Funcion para la galeria de fotos */
 const slider = document.querySelector("#slider");
 let sliderSection = document.querySelectorAll(".slider-section");
 let sliderSectionLast = sliderSection[sliderSection.length -1];


 const btnLeft = document.querySelector("#btn-left");
 const btnRight = document.querySelector("#btn-right");
 slider.insertAdjacentElement('afterbegin', sliderSectionLast);


    function next() {//hacia la derecha
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
       slider.style.transition = "none";
       slider.insertAdjacentElement('beforeend', sliderSectionFirst);
       slider.style.marginleft = "-100%"
    }, 500);


    }


    function prev() { //hacia la izquierda
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
       slider.style.transition = "none"
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginleft = "-100%";
       //(prev)
    }, 500);
   }
 


 btnRight.addEventListener("click", function() {
    next();
 });


 btnLeft.addEventListener("click", function() {
    console.log("hola")
    prev();
 });




      //seccion donde el usuario puede ver mas detalles de su destino preferido:
//opcion1(Houston-texas)
document.getElementById("option1").addEventListener("click",() => {
document.getElementById("houston-texas").style.display ='block';
document.getElementById("merida-vzla").style.display ='none';
document.getElementById("sa-col").style.display ='none';
document.getElementById("sanjcr").style.display ='none';
document.getElementById("option2").style.display = 'none'
document.getElementById("option3").style.display = 'none'
document.getElementById("option4").style.display = 'none'
document.getElementById("option1").style.display = 'none'
//document.getElementById("section-card").style.display = 'none'
//document.getElementById("modal-containeID").style.display = 'none';
});


//opcion2(Merida-Venezuela)
document.getElementById("option2").addEventListener("click",()=> {
document.getElementById("houston-texas").style.display='none';
document.getElementById("merida-vzla").style.display='block';
document.getElementById("sa-col").style.display='none';
document.getElementById("sanjcr").style.display='none';
document.getElementById("option2").style.display = 'none';
document.getElementById("option3").style.display = 'none';
document.getElementById("option4").style.display = 'none';
document.getElementById("option1").style.display = 'none';
//document.getElementById("section-card").style.display = 'none'
//document.getElementById("modal-containeID").style.display = 'none';
});


//opcion3(San Andres-Colombia)
document.getElementById("option3").addEventListener("click",()=> {
document.getElementById("houston-texas").style.display='none';
document.getElementById("merida-vzla").style.display='none';
document.getElementById("sa-col").style.display='block';
document.getElementById("sanjcr").style.display='none';
document.getElementById("option2").style.display = 'none';
document.getElementById("option3").style.display = 'none';
document.getElementById("option4").style.display = 'none';
document.getElementById("option1").style.display = 'none';
//document.getElementById("section-card").style.display = 'none';
//document.getElementById("modal-containeID").style.display = 'none';
});


//opcion4(San Jose Costa Rica)
document.getElementById("option4").addEventListener("click",()=> {
document.getElementById("houston-texas").style.display='none';
document.getElementById("merida-vzla").style.display='none';
document.getElementById("sa-col").style.display='none';
document.getElementById("sanjcr").style.display='block';
document.getElementById("option2").style.display = 'none';
document.getElementById("option3").style.display = 'none';
document.getElementById("option4").style.display = 'none';
document.getElementById("option1").style.display = 'none';
document.getElementById("section-card").style.display = 'none'
//document.getElementById("modal-containeID").style.display = 'none';
});




document.querySelectorAll(".reservation-button").forEach(button => {
   button.addEventListener("click", () => {
      document.getElementById("houston-texas").style.display='none';
      document.getElementById("merida-vzla").style.display='none';
      document.getElementById("sa-col").style.display='none';
      document.getElementById("sanjcr").style.display='none';
      document.getElementById("validator-section").style.display = 'block';
      document.getElementById("section-card").style.display = 'block'
      console.log("hi carambola")
     // document.getElementById("modal-containeID").style.display = 'none';
   })
})




// document.getElementById("validator").style.display = 'none'




//document.getElementById("reservation").addEventListener("click", () => {
   //document.getElementById("houston-texas").style.display='none';
  // document.getElementById("merida-vzla").style.display='none';
   //document.getElementById("sa-col").style.display='none';
  // document.getElementById("sanjcr").style.display='none';
  // document.getElementById("option2").style.display = 'none';
   //document.getElementById("option3").style.display = 'none';
  // document.getElementById("option4").style.display = 'none';
   //document.getElementById("option1").style.display = 'none';
  // document.getElementById("validator-section").style.display = 'block';
//console.log("hi")
//})


// bloque para ingresar el codigo de la tarjeta

let cardNumber = document.getElementById("numbercar"); //Input del valor de la tarjeta.
 //console.log(cardNumber)
let carBtn = document.getElementById("sendcardend");  // Boton para validar la tarjta.
let modalContainer = document.querySelectorAll(".modal-container")[0];
let modal = document.querySelectorAll(".modal")[0]
let btnCloseModal = document.querySelectorAll(".close")[0];

//let carBtn = document.getElementById("");
//let crediNumber = document.getElementById("numbercar");
 carBtn.addEventListener("click",(e) => {
   console.log("test")
   e.preventDefault();
   modalContainer.style.opacity = "1"; 
   modalContainer.style.visibility = "visible";
   modal.classList.toggle("modal-close");

   
  let nameUser = document.getElementById("name").value  // Input para escribir el nombre de la persona. 
   let lastNameUser = document.getElementById("lastname").value //Input para escribir su apellido.
 //console.log(validator.isValid(cardNumber.value))


    if(validator.isValid(cardNumber.value)) {
     // console.log(nameUser + " " + lastNameUser + " " + "tu tarjeta es valida" + validator.maskify(cardNumber.value))
      let resultValid = document.getElementById("validator.texto");
      let resultValidNumber = document.getElementById("validator.number")
      resultValid.innerHTML = nameUser + " " + lastNameUser + " " + "tu tarjeta es valida"
      resultValidNumber.innerHTML = validator.maskify(cardNumber.value.trim());
  // alert(  nameUser + " " + lastNameUser + " " + "tu tarjeta es valida" + validator.maskify(cardNumber.value));
      } else{
         //console.log(nameUser + " " + lastNameUser + " " + "tu tarjeta es invalida" + validator.maskify(cardNumber.value))
         let resultInValid = document.getElementById("validator.texto");
         let resultInValidNumber = document.getElementById("validator.number")
          resultInValid.innerHTML = nameUser + " " + lastNameUser + " " + "tu tarjeta es invalida"
          resultInValidNumber.innerHTML = validator.maskify(cardNumber.value.trim());
    //   alert( nameUser + " " + lastNameUser + " " +  "tu tarjeta es invalida" + validator.maskify(cardNumber.value));
  }

 
}
)

btnCloseModal.addEventListener("click", () => {
  modal.classList.toggle("modal-close"); 
  setTimeout(function(){
   modalContainer.style.opacity = "0";
   modalContainer.style.visibility= "hidden";

  }, 600)
})

window.addEventListener("click", (e) => {
   if(e.target === modalContainer){
      modal.classList.toggle("modal-close"); 
      setTimeout(function(){
       modalContainer.style.opacity = "0";
       modalContainer.style.visibility= "hidden";
    
      }, 600)
   }

}) 


   
