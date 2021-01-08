
// HOMEPAGETOGGLE MENU  
// get togglemenu, listen for click event -then get mobilemenu toggle (change) CSS class to div.active
document.getElementById("togglemenu").addEventListener('click', ()=> {
    document.getElementById('mobilemenu').classList.toggle('active');
});

// HOMEPAGE WELCOME GREETING
const homepageGreetings = [ 'Welcome' ,'Bienvenidos' , 'أهلا بك' , 'स्वागत हे' , '欢迎' ]
// set counter to 0
var counter = 0;
    // function get greeting by ID, assign it to homepageGreetings location counter
    setInterval(function() {
        document.getElementById('greeting').innerHTML = homepageGreetings[counter];
        counter++;
        //if counter is more than greetings array, set counter to 0
        if (counter >= homepageGreetings.length){
            counter = 0;
        }
        // repeat every 1 second (in milliseconds)
        }, 1000); 

// RADIO BUTTONS FUNCTION
function checkAnswer(answer, radiobuttonName){

    var radioButtons = document.getElementsByName(radiobuttonName);
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked == true && radioButtons[i].value === answer){ 
            alert("You have selected " + radioButtons[i].value + " as your answer.                                                   ☆彡(ノ^ ^)ノ Congratulations ヘ(^ ^ヘ)☆彡                                    That is the correct answer!!");
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

//   EVENT LISTENER FOR > NEXT BUTTON > 
nextButton.addEventListener("click", function nextClick(){
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    translateToTargetSlide(carousel, currentSlide, nextSlide);
    hideCarouselButton(nextSlide, carouselSlides);
    moveDotWithSlide(nextSlide, carouselSlides,carouselNav, navDots);
});

//  EVENT LISTENER FOR < PREVIOUS BUTTON <
previousButton.addEventListener("click", function prevClick(){
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;

    translateToTargetSlide(carousel, currentSlide, previousSlide);
    hideCarouselButton(previousSlide, carouselSlides)
    moveDotWithSlide(previousSlide, carouselSlides,carouselNav, navDots);
});

//  EVENT LISTENER ON - NAV DOTS -
carouselNav.addEventListener("click", function dotClick(e){
    if(e.target === carouselNav)return;
    const targetDot = e.target; 
    
    const currentSlide = carousel.querySelector(".active");
    const currentDot = carouselNav.querySelector(".active");
    
    let targetDotIndex = findIndex(targetDot, navDots);
    const targetSlide = carouselSlides[targetDotIndex];
    
    translateToTargetSlide(carousel, currentSlide, targetSlide);
    addRemoveActiveClass(currentDot, targetDot);
    hideCarouselButton(targetSlide, carouselSlides)
})

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

//  HIDE FIRST/LAST BUTTONS 
function hideCarouselButton(targetSlide, carouselSlides){
    if (targetSlide === carouselSlides[0]){
        previousButton.classList.add("hide-btn");
        nextButton.classList.remove("hide-btn");
    } else if(targetSlide === carouselSlides[carouselSlides.length-1]){
        nextButton.classList.add("hide-btn");
        previousButton.classList.remove("hide-btn");
    } else { 
        nextButton.classList.remove("hide-btn");
        previousButton.classList.remove("hide-btn");
    }
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
window.addEventListener("keydown", function(e){
    if(e.keyCode === 39){
        
    }
    else if(e.keyCode === 37){
        prevClick();
    }
})
