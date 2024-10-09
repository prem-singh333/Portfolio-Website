/**===================== Header-Section=======================**/

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu")
let sidebar = document.querySelector(".sidebar");
let cross = document.querySelector(".cross");



cross.style.display = "none";

hamburger.addEventListener("click",() => {
    console.log("menu was clicked");
    sidebar.classList.toggle("sidebargo");

    if(sidebar.classList.contains("sidebargo")){

       
        setTimeout(() => {
            menu.style.display = "inline";
        },200);

        setTimeout(() => {
            cross.style.display = "none";
        },190);

    }else{

        setTimeout(() => {
            menu.style.display = "none";
        },295);

        setTimeout(() => {
            cross.style.display = "inline";
        },300);
    }

});




// let menu =  document.querySelector(".menu");
// let cross = document.querySelector(".cross");
// let sidebar = document.querySelector(".side-bar");

// let hamburger = document.querySelector(".hamburger");

// let text = document.querySelector(".sec-text");


// cross.style.display = "none";
// menu.style.display = "inline";

// hamburger.addEventListener("click",() => {
//     sidebar.classList.toggle("sidebar-go");

//         if( sidebar.classList.contains("sidebar-go")){
//             setTimeout(() => {
//                 menu.style.display = "inline";
//             },200);
//             cross.style.display = "none";
//         }else{
//             setTimeout(() => {
//                 menu.style.display = "none";
//             },200);

//             setTimeout(() => {
//                 cross.style.display = "inline";
//             },350);
//         }

// });

// let textLoad = () => {

//     setTimeout(() => {
//         text.textContent = "Frontend Developer";
//     },0);

//     setTimeout(() => {
//         text.textContent = "UI/UX Designer";
//     },5000);

//     setTimeout(() => {
//         text.textContent = "Freelancer";
//     },10000);

//     setTimeout(() => {
//         text.textContent = "Coder";
//     },15000);
// }

// textLoad();

// setInterval(textLoad, 20000);