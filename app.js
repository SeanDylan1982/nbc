const slides = document.querySelectorAll(".slide");

slides.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

function carousel(){
  counter++;
  if (counter === 6){
    counter = 0;
  }
  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
setInterval(carousel, 5000);

