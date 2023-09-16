let drptn = document.querySelector(".drpbtn");
let myDropdown = document.querySelector("#myDropdown");

let btn = drptn.addEventListener('click',toggle)

let arrow = document.querySelector(".arrow");
arrow.addEventListener('click',toggle)
  
  function toggle() {
    if (
      myDropdown.style.display === "none" 
      
      ) {
    myDropdown.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    myDropdown.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}



let menu = document.querySelector('.menuLogo')

menu.addEventListener('click',toggle2)

function toggle2(){
  let mobileNavOptions = document.querySelector('.mobile-nav-options')
  if(mobileNavOptions.style.display === 'none'){
  mobileNavOptions.style.display ='block'}
  else{
    mobileNavOptions.style.display = 'none'
  }
}
let drptn2= document.querySelector(".drpbtn2");
let myDropdown2 = document.querySelector("#myDropdown2");
arrow2 = document.querySelector(".arrow2");

drptn2.addEventListener('click',toggle3)

  
  function toggle3() {
    if (
      myDropdown2.style.display === "none" 
      
      ) {
    myDropdown2.style.display = "block";
    arrow2.style.transform = "rotate(180deg)";
  } else {
    myDropdown2.style.display = "none";
    arrow2.style.transform = "rotate(0deg)";
  }
}

