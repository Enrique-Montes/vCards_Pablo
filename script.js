// Script del modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function toggleForm() {
    document.getElementById("contactForm").classList.toggle("show");
}

// boton background
const openGallery = document.getElementById("openGallery");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".lightbox .close");

openGallery.addEventListener("click", (e) => {
  e.preventDefault();
  lightbox.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Cerrar al dar clic fuera de las imágenes
lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


const openVideos = document.getElementById("openVideos");
const videoLightbox = document.getElementById("videoLightbox");
const closeVideoBtn = videoLightbox.querySelector(".close");

openVideos.addEventListener("click", (e) => {
  e.preventDefault();
  videoLightbox.style.display = "block";
});

closeVideoBtn.addEventListener("click", () => {
  videoLightbox.style.display = "none";
  videoLightbox.querySelectorAll("video").forEach(v => v.pause());
});

videoLightbox.addEventListener("click", (e) => {
  if (e.target === videoLightbox) {
    videoLightbox.style.display = "none";
    videoLightbox.querySelectorAll("video").forEach(v => v.pause());
  }
});




// CARRUSEL
//let currentSlide = 0;

//function moveSlide(step) {
  //const slides = document.querySelectorAll('.slide');
  //currentSlide = (currentSlide + step + slides.length) % slides.length;
  //const offset = -currentSlide * 100;
  //document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
//}

// Auto-avance cada 4 segundos (opcional)
//setInterval(() => moveSlide(1), 4000);
