const horariMati = document.getElementById("horari-mati");
const horariTarda = document.getElementById("horari-tarda");
function switchHorarios(event){
    if(event.checked){
        horariMati.style.display = "none"
        horariTarda.style.display = "block"
    }else{
        horariTarda.style.display = "none"
        horariMati.style.display = "block"
    }
}
const tarifaAnual = document.getElementById("tarifas-anuals-parent");
const tarifaPuntual = document.getElementById("tarifas-puntuals-parent");
function switchTarifas(event){
    if(event.checked){
        tarifaAnual.style.display = "none"
        tarifaPuntual.style.display = "flex"
    }else{
        tarifaPuntual.style.display = "none"
        tarifaAnual.style.display = "flex"
    }
}

var windowSize = window.innerWidth;
if(windowSize < 800){
    var swiperAboutMobile = new Swiper(".about-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiperServeisMobile = new Swiper(".serveis-swiper", {
        direction: 'horizontal',
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
    });
    var swiperTarifasMobile = new Swiper(".tarifes-swiper", {
        direction: 'horizontal',
        spaceBetween: 10,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
        },
    });
}else{
    var swiperAboutLaptop = new Swiper(".about-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiperServeisLaptop = new Swiper(".serveis-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiperTarifesLaptop = new Swiper(".tarifes-swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}