// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll();

const navsel=document.getElementById("nav");
function circlefollowup(){
  navsel.addEventListener("mousemove",function(dets){
    const mover = document.getElementById("mover");
    
    // Apply translation for both X and Y
    mover.style.transform = `translate(${dets.clientX-450}px`;
    mover.style.opacity="1";
      

  })}
  function mouseleft(){
    mover.style.opacity="0";
  }
  

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
      var preloader = document.getElementById("preloader");
      var content = document.getElementById("content");
  
      preloader.style.display = "none";
      content.style.opacity = "1";
    }, 3000);
  });
  

