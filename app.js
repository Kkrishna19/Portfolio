
window.onload = () => {
    document.querySelector(".landing").style.height =`${window.innerHeight}px` ;
 }

let menu=document.querySelector(".menu");
let mobileNav=document.querySelector(".mobile-nav");

menu.addEventListener("click",()=>{
   
   mobileNav.style.display="flex";
   mobileNav.classList.remove("anime-rev");
   mobileNav.classList.add("anime-for");

})


document.querySelector(".mobile-nav-close").addEventListener("click",()=>{
  
  mobileNav.classList.remove("anime-for");
  mobileNav.classList.add("anime-rev");
  setTimeout(()=>{
     mobileNav.style.display="none";
  },1000)

})



