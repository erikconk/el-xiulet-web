
const imagesUrl = [
    "/assets/instalacions/edited/resized/pic2.jpg",
    "/assets/instalacions/edited/resized/pic1.jpg",
    "/assets/instalacions/edited/resized/pic3.jpg",
    "/assets/instalacions/edited/resized/pic4.jpg",
]
const preloadImages = []
var index = 0
const movement = [
    { backgroundPosition: "100% 0%" },
    { backgroundPosition: "100% 100%" },
  ];
  
  const animationTime = {
    duration: 8000,
    iterations: 1,
  };
var imageElement = document.getElementById("about-images-slider");

function nextImage(){
    console.log(preloadImages[index].src)
    imageElement.style.backgroundImage = `url(${preloadImages[index].src})`
    imageElement.animate(movement, animationTime)
    index > 2 ? index = 0 : index++;
}
window.onload = function (){
    preLoadImages();
    imageElement.style.backgroundImage = `url(${preloadImages[index].src})`
    imageElement.animate(movement, animationTime)
    index++;
    setInterval(nextImage, 5000);
}

function preLoadImages(){
    for(let i = 0; i < imagesUrl.length; i++){
        let img = new Image();
        img.src = imagesUrl[i]
        img.onload = preloadImages.push(img);
    }
}
