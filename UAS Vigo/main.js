const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

//about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin:"left"
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1300,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1700,
});

//room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interlay: 500,
});

//service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interlay: 500,
  origin: "right",
});

// Dummy data for photo gallery
const photoGalleryData = [
  'hotel lama.jpg',
  'photo2.jpg',
  'photo3.jpg',
// Add more photo filenames as needed
];

// Function to create photo gallery
function createPhotoGallery() {
  const photoGallery = document.getElementById('photo-gallery');

  photoGalleryData.forEach((photo) => {
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo');

    const img = document.createElement('img');
    img.src = `images/${photo}`; // Assuming your images are in an "images" folder
    img.alt = 'Company History';
    
    photoContainer.appendChild(img);
    photoGallery.appendChild(photoContainer);
  });
}

// Execute the function when the page is loaded
window.onload = createPhotoGallery;
