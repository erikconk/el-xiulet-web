const menuItems = document.getElementsByClassName("navBar-item");
var menuState = false;

function scrollToPage(event){
    var page = event.id.split("-")[1]
    var y = document.getElementById(page).getBoundingClientRect().y
    var currentPosition = Math.abs(document.body.getBoundingClientRect().y) 
    var scrollToY =  currentPosition + y
    window.scrollTo({
        top : scrollToY,
        behavior : "smooth"
    })
    if(window.innerWidth < 800){
        if(menuState){
            for(let i = 0; i < menuItems.length; i++){
                menuItems[i].style.display = "none"
            }
            menuState = false
        }
    }
}

function menuHandle(){
    if (!menuState){
        for(let i = 0; i < menuItems.length; i++){
            menuItems[i].style.display = "block"
        }
        menuState = true
    }else{
        for(let i = 0; i < menuItems.length; i++){
            menuItems[i].style.display = "none"
        }
        menuState = false
    }
}