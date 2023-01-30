"use strict";

const menu = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
// Selects both the links inside the menu and the toggle button
const navLinks = document.querySelectorAll("li.nav-links, span.nav-links");
const logoText = document.getElementById("logo-text");

// To prevent the sidebar to cover the page on loading
// on mobile devices
if (document.documentElement.clientWidth < 401) {
  menu.classList.add("closed");
  mainContent.classList.add("closed");
}

// By clicking a menu link the sidebar will close while moving
// to the section selected
navLinks.forEach((link) => {
  link.onclick = function () {
    menu.classList.toggle("closed");
    mainContent.classList.toggle("closed");
  };
});

// Classic user behaviour, logo = top of the site
logoText.onclick = () => window.scrollTo(0, 0);

// EmailJS
window.onload = function () {
  // my public key
  emailjs.init("psYEtewdrdop7hGev");
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // generates a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", this).then(
      function () {
        console.log("SUCCESS!");
        alert("Il tuo messaggio è stato inviato!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Errore! Ricarica la pagina e riprova.");
      }
    );
  });
};
