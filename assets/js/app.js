const swiper = new Swiper('.customer__slide', {
    // Optional parameters
    slidesPerView: "auto",
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".customer__dots",
        clickable: true,
      },
    navigation: {
      nextEl: '.customer__button-next',
      prevEl: '.customer__button-prev',
    },
  

  });

const hambuger = document.querySelector(".header__hambuger")
const menu = document.querySelector(".header__menu")


hambuger.addEventListener("click", function(){

  if(hambuger.classList.contains("active")){
    hambuger.classList.remove("active")
    menu.classList.remove("active")
  }else{
    hambuger.classList.add("active")
    menu.classList.add("active")
  }
})

window.addEventListener("click",function(e){
  if(!menu.contains(e.target) && !e.target.matches(".header__hambuger")){
    hambuger.classList.remove("active")
    menu.classList.remove("active")
  }
})
