
// HOMEPAGE TOGGLE MENU  
console.log(document.getElementsByClassName("menulink"));
document.getElementById("togglemenu").addEventListener("click", ()=> {
    document.getElementById("mobilemenu").classList.toggle("active");
});

// CLOSE TOGGLE MENU ON LINK CLICK
document.querySelectorAll(".menulink").forEach( menuLink => menuLink.addEventListener("click", ()=>{
    document.getElementById("mobilemenu").classList.toggle("active");
}));

// HOMEPAGE WELCOME GREETING
const homepageGreetings = [ "Welcome" ,"Bienvenidos" , "أهلا بك" , "स्वागत हे" , "欢迎" ]
var counter = 0;
    setInterval(function() {
        document.getElementById("greeting").innerHTML = homepageGreetings[counter];
        counter++;
        if (counter >= homepageGreetings.length){
            counter = 0;
        }
        }, 1000); 

// RADIO BUTTONS FUNCTION
function checkAnswer(answer, radiobuttonName){

    var radioButtons = document.getElementsByName(radiobuttonName);
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked == true && radioButtons[i].value === answer){ 
            alert("You have selected " + radioButtons[i].value + " as your answer.                                                  ☆彡(ノ^ ^)ノ Congratulations ヘ(^ ^ヘ)☆彡                                    That is the correct answer!!");
        }       
        else if(radioButtons[i].checked == true && radioButtons[i].value !== answer){ 
            alert("You have selected " + radioButtons[i].value + " as your answer. Sorry that is the wrong answer. Please try again. ≧◠‿◠≦ ✌❤✌");
        }
    }
}

// ---- IMAGE CAROUSEL ----

//  GET CAROUSEL IMAGE ELEMENTS 
const carousel = document.querySelector(".carousel-track");

//  ALL CAROUSEL SLIDES ARRAY
const carouselSlides = [...carousel.children];

//  GET BUTTONS ELEMENTS
const nextButton = document.querySelector(".next-btn");
const previousButton = document.querySelector(".prev-btn");
const playButton = document.querySelector(".play-btn");
const pauseButton = document.querySelector(".pause-btn");

//  GET NAVIGATION DOT ELEMENTS
const carouselNav = document.querySelector(".carousel-nav");

//  ALL NAVIGATION DOT ELEMENTS ARRAY
const navDots = [...carouselNav.children];

//  SLIDE WIDTH
let carouselSlideWidth = carouselSlides[0].getBoundingClientRect().width;

//  SLIDES POSITIONED HORIZONTALLY
function slidePosition(carouselSlides){
    for (let index = 0; index < carouselSlides.length; index++){
        carouselSlides[index].style.left = carouselSlideWidth * index + "px";
    }
}
slidePosition(carouselSlides);

//  AUTOMATIC NAVIGATION
let myTimer = setInterval(nextImage, 3000);

function restartTimer(){
    clearInterval(myTimer);
    myTimer = setInterval(nextImage,3000);
}

//   EVENT LISTENER FOR PLAY BUTTON 
playButton.addEventListener("click", function(){
    if(!myTimer){
    nextImage();
    myTimer = setInterval(nextImage, 3000);
    }
});

//   EVENT LISTENER FOR PAUSE BUTTON 
pauseButton.addEventListener("click", function() { 
    clearInterval(myTimer);
    myTimer = false;
});

//  NEXT BUTTON NAVIGATION 
function nextImage(){
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    if (currentSlide === carouselSlides[carouselSlides.length-1])
    {
        // carousel.classList.add("hide-transition"); TAKES SLIDE TO TARGET SLIDE WITHOUT TRANISITION
        translateToTargetSlide(carousel, currentSlide, carouselSlides[0]);
        const currentDot = carouselNav.querySelector(".active");
        const firstDot = navDots[0];
        addRemoveActiveClass(currentDot, firstDot);
    } 
    else { 
        carousel.classList.remove("hide-transition");
        translateToTargetSlide(carousel, currentSlide, nextSlide);
        moveDotWithSlide(nextSlide, carouselSlides,carouselNav, navDots);
    }
};

//   EVENT LISTENER FOR NEXT BUTTON 
nextButton.addEventListener("click", function() {
    nextImage(); 
    restartTimer();
});

//  PREVIOUS BUTTON NAVIGATION 
function prevImage(){
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;

    if (currentSlide === carouselSlides[0])
    {   
        // carousel.classList.add("hide-transition");
        translateToTargetSlide(carousel, currentSlide, carouselSlides[carouselSlides.length-1]);
        const currentDot = carouselNav.querySelector(".active");
        const lastDot = navDots[navDots.length-1];
        addRemoveActiveClass(currentDot, lastDot);
    } 
    else { 
        carousel.classList.remove("hide-transition");
        translateToTargetSlide(carousel, currentSlide, previousSlide);
        moveDotWithSlide(previousSlide, carouselSlides,carouselNav, navDots);
    }
};
//   EVENT LISTENER FOR PREVIOUS BUTTON 
previousButton.addEventListener("click", function() {
    prevImage(); 
    restartTimer();
});

//  NAVIGATION DOTS 
function clickDot(e){
    if(e.target === carouselNav)return;
    const targetDot = e.target; 
    
    const currentSlide = carousel.querySelector(".active");
    const currentDot = carouselNav.querySelector(".active");
    
    let targetDotIndex = findIndex(targetDot, navDots);
    const targetSlide = carouselSlides[targetDotIndex];
    
    carousel.classList.add("hide-transition");
    translateToTargetSlide(carousel, currentSlide, targetSlide);
    addRemoveActiveClass(currentDot, targetDot);
};
//   EVENT LISTENER FOR NAVIGATION DOTS 
carouselNav.addEventListener("click", function(e){
    clickDot(e); 
    restartTimer();
});

//  MOVE DOT POSITION WHEN SLIDE POSITION MOVED WITH NEXT/PREV BUTTONS
function moveDotWithSlide(targetSlide, carouselSlides, carouselNav, navDots){
    let carouselSlideIndex = findIndex(targetSlide, carouselSlides);
    const currentDot = carouselNav.querySelector(".active");
    const targetDot = navDots[carouselSlideIndex];
    
    addRemoveActiveClass(currentDot, targetDot);
}

//  TRANSLATE TO TARGET SLIDE
function translateToTargetSlide(carousel, currentSlide, targetSlide){
    const translatePosition = targetSlide.style.left;
    carousel.style.transform = `translateX(-${translatePosition})`;
   
    addRemoveActiveClass(currentSlide, targetSlide);
}

//  ADD/REMOVE ACTIVE-CLASS - ON BUTTONS AND DOTS
function addRemoveActiveClass(current, target){
    current.classList.remove("active");
    target.classList.add("active");
}

//  FIND INDEX OF AN ITEM INSIDE ARRAY OF ITEMS
function findIndex(item, items){
    for(let index=0; index < items.length; index++){
        if (item === items[index]){
            return index;
        }
    }
};

//  KEYBOARD NAVIGATION
function keyboardNav (e){
    if(e.keyCode === 39){
        nextImage();
        restartTimer();
    }
    else if(e.keyCode === 37){
        prevImage();
        restartTimer();
    }
};
//   EVENT LISTENER FOR KEYBOARD NAVIGATION 
document.addEventListener("keydown", keyboardNav);
    
//  READ MORE BUTTON ON FCC CARD

document.querySelector(".read-more-btn").addEventListener( "click", function(e){
    readMore(e);
});

function readMore(e){

    const parentElement = e.target.parentElement;
    const readMoredots = parentElement.querySelector(".read-more-dots");
    const readMoreContent = parentElement.querySelector(".read-more-content");

    if( readMoredots.style.display === "none"){
        readMoredots.style.display = "inline";
        e.target.innerHTML = "Read More";
        readMoreContent.style.display = "none";
    }
    else {
        readMoredots.style.display = "none";
        e.target.innerHTML = "Read Less";
        readMoreContent.style.display = "inline"
    }
}






 


