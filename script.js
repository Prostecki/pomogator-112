"use strict";
const header = document.querySelector("header");
const contactButton = document.querySelector("#contact-to-master");
const numberButton = document.querySelector(".call-to-locksmith");
const mainContainer = document.querySelector(".main-container");
const feedbackFormContainer = document.querySelector(
  ".feedback-form-container"
);

window.onscroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
};

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(
    () =>
      document
        .querySelector(".first-section-safety-article")
        .classList.add("isActive"),
    1500
  );
  setTimeout(
    () =>
      document
        .querySelector(".first-section-headline")
        .classList.add("isActive"),
    2500
  );
  setTimeout(() => {
    contactButton.classList.add("isActive");
    numberButton.classList.add("isActive");
  }, 3500);
});

contactButton.addEventListener("click", () => {
  feedbackFormContainer.classList.add("show");
  document.body.style.overflow = "hidden";
  console.log("clicked?");

  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", (e) => {
    feedbackFormContainer.classList.remove("show");
    document.body.style.overflow = "";
    if (e.target === mainContainer) {
      closeModal();
    }
  });
});
