//How you select html elements, make a variable, use querySelector and
//input either the element name or its class
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <=5; i++){
//makes a new image element to be used
const newImage = document.createElement('img');
//sets the image to the same number as the loop, this works since
//the only difference between each jpg is a number
newImage.setAttribute('src', "images/pic"+i+".jpg");
//puts the image on the thumbbar
thumbBar.appendChild(newImage);

//adds a listenter. Sets the displayed image to what was clicked

newImage.onclick = function(e){
  displayedImage.src = e.target.src;
}

}
/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
  const btnClass = btn.getAttribute("class");
  if(btnClass == "dark"){
    btn.setAttribute("class","light");
    btn.textContent = "Lighter";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }else{
    btn.setAttribute("class","dark");
    btn.textContent = "Darker";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
