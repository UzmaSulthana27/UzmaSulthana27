const userData=JSON.parse(localStorage.getItem('signupData'));
if(!userData ){
    alert("invalid session data, please log in again.");
    window.location.href="login.html";
}else{
    document.getElementById("welcomeMessage").textContent=`Welcome back,${userData.username}!`;

}

// carousel slide

const slides = document.querySelectorAll('.category');
const track = document.getElementById('carouselTrack');
const nextBtn = document.querySelector('.carousel-btn.right');
const prevBtn = document.querySelector('.carousel-btn.left');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  const slideWidth = slides[0].offsetWidth + 20; // include margin
  const scrollPosition = index * slideWidth;
  track.style.transform = `translateX(-${scrollPosition}px)`;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
showSlide(current);

// carousel 

let shoes=document.getElementById('shoes');
shoes.addEventListener('click',()=>{
    location.href="shoes.html";
})

let women=document.getElementById('women');
women.addEventListener('click',()=>{
    location.href="women.html";
})

let kids=document.getElementById('kids');
kids.addEventListener('click',()=>{
  location.href="kids.html"
})

let bags=document.getElementById('bags');
bags.addEventListener('click',()=>{
  location.href="bags.html"
})

let beauty=document.getElementById('beauty');
beauty.addEventListener('click',()=>{
  location.href="beauty.html"
})

let decor=document.getElementById('decor');
decor.addEventListener('click',()=>{
  location.href="decor.html"
})

let jewellery=document.getElementById('jewellery');
jewellery.addEventListener('click',()=>{
  location.href="jewellery.html"
})

let men=document.getElementById('men');
men.addEventListener('click',()=>{
  location.href="men.html"
})

let furnitures=document.getElementById('furnitures');
furnitures.addEventListener('click',()=>{
  location.href="furnitures.html"
})

