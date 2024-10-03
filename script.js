let menu =  document.querySelector(".menu");
let cross = document.querySelector(".cross");
let sidebar = document.querySelector(".side-bar");

let hamburger = document.querySelector(".hamburger");

let text = document.querySelector(".sec-text");


cross.style.display = "none";
menu.style.display = "inline";

hamburger.addEventListener("click",() => {
    sidebar.classList.toggle("sidebar-go");

        if( sidebar.classList.contains("sidebar-go")){
            setTimeout(() => {
                menu.style.display = "inline";
            },200);
            cross.style.display = "none";
        }else{
            setTimeout(() => {
                menu.style.display = "none";
            },200);

            setTimeout(() => {
                cross.style.display = "inline";
            },350);
        }

});

let textLoad = () => {

    setTimeout(() => {
        text.textContent = "Frontend Developer";
    },0);

    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    },5000);

    setTimeout(() => {
        text.textContent = "Freelancer";
    },10000);

    setTimeout(() => {
        text.textContent = "Coder";
    },15000);
}

textLoad();

setInterval(textLoad, 20000);