var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
const btn=document.querySelector("#showbtn")
const parag=document.querySelector("#parag2")
console.log(parag)
function show(){
    parag.classList.toggle("show")
    if (parag.classList.contains("show")){
        btn.textContent="AFFICHER MOINS"
    } else{ btn.textContent="AFFICHER PLUS"}
}