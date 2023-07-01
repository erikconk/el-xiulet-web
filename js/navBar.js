const navBar = document.getElementById("navBar");
const navBarContainer = document.getElementById("navContainer");
const menuMobile = document.getElementById("menu-icon");
var isMobile = window.innerWidth < 800;
var gain = 0;
var initPaddingLaptop = 1.5
var initPaddingMobile = 6

document.addEventListener('scroll', () => {
    let screenHeigth = window.innerHeight;
    let positionY = Math.abs(document.body.getBoundingClientRect().y);
    let speedFill = 100 / screenHeigth
    gain = (speedFill * positionY);
    gain /= Math.pow(10, 2)
    gain = gain * 0.9
    gain = gain.toFixed(3) 
    if(window.innerWidth > 800){
        let currentPadding = initPaddingLaptop - (gain * 1.5);
        if(positionY < screenHeigth) navBar.style.boxShadow = "none"
        if(positionY >= screenHeigth) gain = 0.9, currentPadding = 0;
        else if(positionY == 0 ) gain = 0, currentPadding = 1.5;
        navBarContainer.style.paddingTop = `${currentPadding}rem`
    }else{
        let currentPadding = initPaddingMobile - (gain * 4.5);
        if(positionY >= screenHeigth) gain = 0.9, currentPadding = 2;
        else if(positionY == 0 ) gain = 0, currentPadding = 6;
        menuMobile.style.padding = `${currentPadding}vh`
        navBarContainer.style.paddingTop = "0"
    }
    navBar.style.backgroundColor = `rgba(255, 255, 255, ${gain})`
})

window.addEventListener('resize', () => {
    if(isMobile){
        if(window.innerWidth > 800) location.reload();
    }else{
        if(window.innerWidth < 800) location.reload()
    } 
})