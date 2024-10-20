//button for calling a locksmith
const header = document.querySelector("header");
const contactButton = document.getElementById("call-to-locksmith");
const mainContainer = document.querySelector(".main-container");
console.log(contactButton);
const feedbackFormContainer = document.querySelector(
  ".feedback-form-container"
);
const headerParagraph = document.getElementById("header-animate-paragraph");
const serviceElement = document.querySelectorAll(".service");
serviceElement.forEach((item) => {
  item.classList.add("service-appearing");
});

window.addEventListener("DOMContentLoaded", () => {
  feedbackFormContainer.remove();
});

contactButton.addEventListener("click", () => {
  const createElement = (tag, className, textContent) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
  };

  document.body.style.overflow = "hidden";
  header.style.filter = "blur(3px)";
  mainContainer.style.filter = "blur(3px)";

  const container = createElement("div", "modal-container", "");

  container.appendChild(feedbackFormContainer);

  document.body.appendChild(container);

  const closeModalButton = document.querySelector(".close-modal");
  console.log(closeModalButton);

  closeModalButton.addEventListener("click", () => {
    const modalContainer = document.querySelector(".modal-container");
    // modalContainer.remove();
    location.reload();
    document.body.style.overflow = "auto";
    header.style.filter = "none";
    mainContainer.style.filter = "none";
  });
});
