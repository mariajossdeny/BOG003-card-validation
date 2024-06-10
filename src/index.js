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
//document.getElementById("validator").style.display = 'none'
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
//document.getElementById("validator").style.display = 'none';
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
//document.getElementById("validator").style.display = 'none';
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
// document.getElementById("validator").style.display = 'none';
});




document.querySelectorAll(".reservation-button").forEach(button => {
   button.addEventListener("click", () => {
      document.getElementById("houston-texas").style.display='none';
      document.getElementById("merida-vzla").style.display='none';
      document.getElementById("sa-col").style.display='none';
      document.getElementById("sanjcr").style.display='none';
      document.getElementById("validator-section").style.display = 'block';
      console.log("hi carambola")
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


/*
let carBtn = document.getElementById("car");
let crediNumber = document.getElementById("validator");
 carBtn.addEventListener("click",() => {
    if (validator.isValid(crediNumber.value)) {
    alert("tu tarjeta es valida" + validator.maskify(crediNumber.value));
       } else {
    alert("tu tarjeta es invalida" + validator.maskify(crediNumber.value));
  }


})
*/
