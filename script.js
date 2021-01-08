
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

//----IMAGE CAROUSEL---

//GET ELEMENTS 
const carousel = document.querySelector(".carousel-track");

//GET BUTTONS
const nextButton = document.querySelector(".next-btn");
const previousButton = document.querySelector(".prev-btn");


//ALL CAROUSEL SLIDES 
const carouselSlides = [...carousel.children];

//SLIDE WIDTH
let carouselSlideWidth = carouselSlides[0].getBoundingClientRect().width;

//SLIDES POSITIONED HORIZONTALLY
function slidePosition(carouselSlides){
    for (let index = 0; index < carouselSlides.length; index++){
        carouselSlides[index].style.left = carouselSlideWidth * index + "px";
    }
}
slidePosition(carouselSlides);

//EVENT LISTENER ON NEXT BUTTON, MOVE/TranslateX SLIDES LEFT
nextButton.addEventListener("click", function (){
    const currentSlide = document.querySelector(".active-slide");
    const nextSlide = currentSlide.nextElementSibling;

    translateToTargetSlide(carousel, currentSlide, nextSlide);
  
});

//EVENT LISTENER ON PREVIOUS BUTTON, MOVE/TranslateX SLIDES RIGHT
previousButton.addEventListener("click", function (){
    const currentSlide = document.querySelector(".active-slide");
    const previousSlide = currentSlide.previousElementSibling;

    translateToTargetSlide(carousel, currentSlide, previousSlide);
});

//TRANSLATE TO TARGET SLIDE
function translateToTargetSlide(carousel, currentSlide, targetSlide){
    const translatePosition = targetSlide.style.left;
    carousel.style.transform = `translateX(-${translatePosition})`;
    
    addRemoveActiveSlide (currentSlide, targetSlide);
}

//ADD/REMOVE ACTIVE-SLIDE
function addRemoveActiveSlide (current, target){
    current.classList.remove("active-slide");
    target.classList.add("active-slide");
}