
// HOMEPAGETOGGLE MENU  
// get togglemenu, listen for click event -then get mobilemenu toggle (change) CSS class to div.active
document.getElementById('togglemenu').addEventListener('click', ()=> {
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

//ELEMENTS 
const carousel = document.querySelector(".carousel-track");
console.log(carousel.children);

//ALL CAROUSEL SLIDES 
const carouselSlides = [...carousel.children];

//SLIDE WIDTH
let carouselSlideWidth = carouselSlides[0].getBoundingClientRect().width;



