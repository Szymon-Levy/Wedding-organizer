// hamburger menu
const offcanvasToggler = document.querySelector(".offcanvas-toggler");
const navigation = document.querySelector(".nav");

offcanvasToggler.addEventListener("click", () =>{
    navigation.classList.toggle("active");
    offcanvasToggler.classList.toggle("active");
});



//sticky header

const mainHeader = document.getElementById("main-header");


window.onscroll = function (){
    scrollFunction();
};

function scrollFunction (){
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900 ) {
        mainHeader.classList.add("sticky");
    }

    else {
        mainHeader.classList.remove("sticky");
    }
    
};


//images slider
const swiper = new Swiper('#images-slider', {
    speed: 400,
    spaceBetween: 0,
    grabCursor: true,


    breakpoints: {
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

  });


//logos carousel
const swiper2 = new Swiper('#logos-slider', {
    speed: 1400,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 2,
    loop: true,


    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        }
    },

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

  });


  //animations intersection observer

const animatedElements = document.querySelectorAll(".animate__animated");

const animationsObserver = new IntersectionObserver(elements => {
    elements.forEach( element => {
        if(element.isIntersecting){
            let animationAttribute = element.target.getAttribute("data-anim");
            element.target.classList.add(animationAttribute);
        }
    });
});

animatedElements.forEach(element => {
    animationsObserver.observe(element);
});