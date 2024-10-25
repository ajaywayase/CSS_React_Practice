
let wrapper = document.createElement("div");
wrapper.className = "wrapper";
//let wrapper = document.getElementsByClassName("wrapper")[0];

let starsContainer = document.createElement('div');
starsContainer.id = "stars";
starsContainer.className = "starsContainer";
wrapper.appendChild(starsContainer);

let starsValue = document.createElement('div');
starsValue.id = "display-star-value";
starsValue.className = "star-value";
wrapper.appendChild(starsValue);

document.body.appendChild(wrapper);
// let starsContainer = document.getElementById("stars");
let selectedVal = -1;

for(let i=0; i < 5; i++){
    let starImg = document.createElement('img');
    starImg.src = "./star.svg";
    starImg.className = "star-style";
    starsContainer.appendChild(starImg) 

    starImg.addEventListener("mouseover", () => onStarHover(i));
    starImg.addEventListener("mouseleave", onStarOut);
    starImg.addEventListener("click", () => onCLicked(i));
}

let stars = document.querySelectorAll(".star-style");

function fill(val){

    for(let i = 0; i < 5; i++){
        if(i <= val){
            stars[i].src = "./star-filled.svg";
        }
        else{
            stars[i].src = "./star.svg"
        }
    }
}

function onStarHover(val){
    fill(val);
}

function onStarOut(){
    fill(selectedVal);
}

function onCLicked(val){
    selectedVal = val;

    document.getElementById("display-star-value").innerHTML = selectedVal + 1;
    fill(selectedVal);
}