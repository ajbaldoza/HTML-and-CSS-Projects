function openLightbox(imgSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
  
    lightboxImg.src = imgSrc;
    lightbox.classList.remove("hidden");
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
  
    lightbox.classList.add("hidden");
  }
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });
  