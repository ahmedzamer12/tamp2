var slide = document.querySelectorAll('.ww');
 var n = 0;
 function slideshow() {
   for (var i = 0; i < slide.length; i++) {
     slide[i].classList.remove("display");
   }
   if (n==0) {
     if (slide[n].classList.contains("active")) {
       slide[n].classList.remove("active");
       slide[n].classList.add("display");
       slide[n+1].classList.add("active");
     }

   }
   else {
     slide[n].classList.remove("active");
     slide[n].classList.add("display");
     slide[0].classList.add("active");
   }
   n++;
   if (n==2) {
     n=0;
   }
 }
 setInterval(slideshow,3000);
/////////////////////////////////////
