// script.js - JS for Carousel and Form Handling

document.addEventListener("DOMContentLoaded", () => { const slides = document.querySelectorAll(".testimonial-slide"); const buttonsContainer = document.createElement("div"); buttonsContainer.classList.add("testimonial-buttons");

const prevBtn = document.createElement("button"); prevBtn.textContent = "Prev"; const nextBtn = document.createElement("button"); nextBtn.textContent = "Next";

buttonsContainer.appendChild(prevBtn); buttonsContainer.appendChild(nextBtn); document.querySelector(".testimonial-carousel").appendChild(buttonsContainer);

let currentSlide = 0;

function showSlide(index) { slides.forEach((slide, i) => { slide.classList.remove("active"); if (i === index) slide.classList.add("active"); }); }

prevBtn.addEventListener("click", () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); });

nextBtn.addEventListener("click", () => { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); });

showSlide(currentSlide);

// Contact form submission const form = document.getElementById("contactForm"); const messageBox = document.getElementById("contactMessage");

form.addEventListener("submit", function (e) { e.preventDefault(); messageBox.textContent = "Thank you for reaching out! We'll get back to you shortly."; form.reset(); }); });

