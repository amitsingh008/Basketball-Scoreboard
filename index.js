const h1El=document.getElementById("h1");
const h2El=document.getElementById("h2");
const h3El=document.getElementById("h3");
const g1El=document.getElementById("g1");
const g2El=document.getElementById("g2");
const g3El=document.getElementById("g3");
const display1El=document.getElementById("display1");
const display2El=document.getElementById("display2");
const newGame=document.getElementById("t");

let homeScore=0;
let guestScore=0;

h1El.addEventListener('click',()=>{
    homeScore+=1;
    display1El.textContent=homeScore;
    highLight(homeScore,guestScore);
})
h2El.addEventListener('click',()=>{
    homeScore+=2;
    display1El.textContent=homeScore;
    highLight(homeScore,guestScore);
})
h3El.addEventListener('click',()=>{
    homeScore+=3;
    display1El.textContent=homeScore;
    highLight(homeScore,guestScore);
})

g1El.addEventListener('click',()=>{
    guestScore+=1;
    display2El.textContent=guestScore;
    highLight(homeScore,guestScore);
})
g2El.addEventListener('click',()=>{
    guestScore+=2;
    display2El.textContent=guestScore;
    highLight(homeScore,guestScore);
})
g3El.addEventListener('click',()=>{
    guestScore+=3;
    display2El.textContent=guestScore;
    highLight(homeScore,guestScore);
})

newGame.addEventListener('click',()=>{
    homeScore=0;
    guestScore=0;
    display1El.textContent=homeScore;
    display2El.textContent=guestScore;
    highLight(homeScore,guestScore);
})

function highLight(homeScore,guestScore)
{
   if(homeScore>guestScore)
   {
    display1El.classList.add("highlight")
    display2El.classList.remove("highlight");
   }
   else if(guestScore>homeScore)
   {
    display2El.classList.add("highlight");
    display1El.classList.remove("highlight");
   }
   else{
    display1El.classList.remove("highlight");
    display2El.classList.remove("highlight");
   }
}