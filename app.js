const slides = document.querySelectorAll(".slide");
const gallery = document.querySelectorAll(".gallery");

gallery.forEach(function(gallery, index){
  gallery.style.left = `${index * 100}%`;
});

slides.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`;
});

let slidesCounter = 0;
let galleryCounter = 0;

function slidesCarousel(){
  slidesCounter++;
  if (slidesCounter === 6){
    slidesCounter = 0;
  }
  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${slidesCounter * 100}%)`;
  });
};
setInterval(slidesCarousel, 5000);

function galleryCarousel(){
  galleryCounter++;
  if (galleryCounter === 6){
    galleryCounter = 0;
  }
  gallery.forEach(function(gallery){
    gallery.style.transform = `translateX(-${galleryCounter * 100}%)`;
  });
};
setInterval(galleryCarousel, 5000);