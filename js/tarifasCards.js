export default class SingleCard {
    constructor(parent, text){
        this.parent = parent;
        this.text = text;
        this.mainDiv = null;
        this.create();
    }
    create(){
        this.text.forEach( element => {
            this.createSingle(element);
        });
    }
    createSingle(element){      
        //Sweeper
        let swiperSlide = document.createElement("div")
        swiperSlide.classList.add("swiper-slide"); 
        // Main
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("singleCard");     
        // Tittle
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("singleCard-title");
        let titleh3 = document.createElement("h3");
        titleh3.innerHTML = element.title;
        titleDiv.appendChild(titleh3);
        cardDiv.appendChild(titleDiv)
        // Includes 
        let includes = document.createElement("div");
        includes.classList.add("singleCard-includes")
        let content = document.createElement("p")
        content.innerHTML = element.includes;  
        //Pushes  
        includes.appendChild(content);
        cardDiv.appendChild(includes);
        swiperSlide.appendChild(cardDiv);
        this.parent.appendChild(swiperSlide)
    }
    add(card){
        this.mainDiv.appendChild(card)
    }
}