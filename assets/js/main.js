// Gallery images (home page)
var galleryImages = ["gallery/camp.png","gallery/Gambling.png","gallery/house.png","gallery/gala.png"];
var currentGalleryIndex = 0;

function openLightbox(event, src) {
  event.stopPropagation();
  var lb = document.getElementById('lightbox'), img = document.getElementById('lightbox-img');
  currentGalleryIndex = galleryImages.indexOf(src);
  img.src = src; lb.style.display='flex'; document.body.style.overflow='hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display='none';
  document.body.style.overflow='auto';
}
function nextGalleryImage(event) {
  event.stopPropagation();
  currentGalleryIndex=(currentGalleryIndex+1)%galleryImages.length;
  document.getElementById('lightbox-img').src=galleryImages[currentGalleryIndex];
}
function prevGalleryImage(event) {
  event.stopPropagation();
  currentGalleryIndex=(currentGalleryIndex-1+galleryImages.length)%galleryImages.length;
  document.getElementById('lightbox-img').src=galleryImages[currentGalleryIndex];
}

// Mobile events toggle (if you kept _aside_)
function toggleHistory(){/*…*/}

// Soup modal
function openSoupModal(){
  var m=document.getElementById('soupModal');
  m.style.display='flex';document.body.style.overflow='hidden';
}
function closeSoupModal(e){
  if(e) e.stopPropagation();
  var m=document.getElementById('soupModal');
  m.style.display='none';document.body.style.overflow='auto';
}
document.querySelector('.back-to-top').addEventListener('click',function(e){
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
});
