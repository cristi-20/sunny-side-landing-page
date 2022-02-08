const menuBtn = document.querySelector(".menu-btn");
 const nav = document.querySelector(".nav");

 

 // Seti Initial State Of Menu
 let showMenu = false;

 menuBtn.addEventListener("click", toggleMenu);

 function toggleMenu() {
   if (!showMenu) {
     menuBtn.classList.add("close");
     nav.classList.add("show");
   
    

     // Set menu state
     showMenu = true;
   } else {
     menuBtn.classList.remove("close");
     nav.classList.remove("show");
    

     // Set Menu State
     showMenu = false;
   }
 }