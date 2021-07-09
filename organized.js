function calcDif()
{
    var picked=0;
    //get date
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(2021,6,10);
    var secondDate = new Date();//calculate current date
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    diffDays = diffDays%100;
    //console.log(firstDate);
    //console.log(secondDate);
    //console.log(diffDays);
    return diffDays
}
function setIMG(){
    var num=calcDif();
    //console.log(num)
    newSTR='';
    newSTR=num+'.JPG';

    STRIMG='IMG/Sponges/'+newSTR;

    //return STRIMG;

    document.getElementById("ChosenOne").src=STRIMG;
}

function setText(){

var selector =calcDif();
LofNames=['test','stegosaurus','elephant','Dragonfly','Chicken','Rocket','Ram','Rhino','Octopus','Elephant','Rocket','Squid','?????????????','Chicken','Elephant','Duck','Snail','Anklyosaurus','Squid','Sheep','Dolphin','Fly','Monkey','Fly','Ostrich','Fishing Boat','Anklyosaurus','Roach','Pig','Triceratops','Dimetrodon','Dimetrodon','Fishing boat','Tyranosaurus Rex','Commercial Plane','Giraffe','Hippopotamus','Train','Ram','Commercial Boat','Giraffe','Pteranodon','Truck','Crab','Fishing Boat','Ant','Big Boi Dino','Rocket'];

NofS=LofNames[selector]; //name of sponge
document.getElementById("name").innerHTML=NofS;
}

function start(){
setIMG()
setText()
}






// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%"; 
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%"; 
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%"; 
  }
}



function eight() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "12.5%"; 
  }
}







