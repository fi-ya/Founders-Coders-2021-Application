
// Toggle Menu  - get togglemenu, listen for click event -then get mobilemenu toggle (change) CSS class to div.active
document.getElementById('togglemenu').addEventListener('click', ()=> {
    document.getElementById('mobilemenu').classList.toggle('active');
});

// Welcome greeting 
// array of greetings 
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
