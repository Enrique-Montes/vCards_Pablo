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
document.addEventListener("DOMContentLoaded", function () {
  const openGallery = document.getElementById("openGallery");
  const lightbox = document.getElementById("lightbox");
  const closeBtn = lightbox.querySelector(".close");

  // Abrir galería
  openGallery.addEventListener("click", function (e) {
    e.preventDefault();
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Cerrar galería
  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Cerrar al hacer clic fuera
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});


//VIDEOS
document.addEventListener("DOMContentLoaded", function () {
  const openVideos = document.getElementById("openVideos");
  const videoLightbox = document.getElementById("videoLightbox");
  const closeBtn = videoLightbox.querySelector(".close");

  // Abrir galería
  openVideos.addEventListener("click", function (e) {
    e.preventDefault();
    videoLightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Cerrar galería
  closeBtn.addEventListener("click", function () {
    videoLightbox.style.display = "none";
    document.body.style.overflow = "auto";
    videoLightbox.querySelectorAll("video").forEach(v => v.pause());
  });

  // Cerrar al hacer clic fuera
  videoLightbox.addEventListener("click", function (e) {
    if (e.target === videoLightbox) {
      videoLightbox.style.display = "none";
      document.body.style.overflow = "auto";
      videoLightbox.querySelectorAll("video").forEach(v => v.pause());
    }
  });
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
