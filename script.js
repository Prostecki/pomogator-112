//button for calling a locksmith
const header = document.querySelector("header");
const contactButton = document.querySelector("#contact-to-master");
const numberButton = document.querySelector(".call-to-locksmith");
const mainContainer = document.querySelector(".main-container");
console.log(contactButton);
const feedbackFormContainer = document.querySelector(
  ".feedback-form-container"
);
const headerParagraph = document.getElementById("header-animate-paragraph");
const firstSectionArticle = document.querySelector(
  ".first-section-safety-article"
);
const firstSectionHeadline = document.querySelector(".first-section-headline");
console.log(firstSectionArticle);

const runningLine = document.querySelector(".running-line");
console.log(runningLine);

runningLine.addEventListener("mouseover", () => {
  runningLine.classList.add("paused");
});

runningLine.addEventListener("mouseout", () => {
  runningLine.classList.remove("paused");
  console.log("paused??");
});
const serviceElement = document.querySelectorAll(".service");
serviceElement.forEach((item) => {
  item.classList.add("service-appearing");
});

//For not appending contact form into web page in the begining
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    firstSectionArticle.classList.add("isActive");
  }, 1500);
  setTimeout(() => {
    firstSectionHeadline.classList.add("isActive");
  }, 2500);
  setTimeout(() => {
    contactButton.classList.add("isActive");
    numberButton.classList.add("isActive");
  }, 3500);
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
    // location.reload();
    document.body.style.overflow = "auto";
    header.style.filter = "none";
    mainContainer.style.filter = "none";
    document.body.appendChild(mainContainer);
    feedbackFormContainer.remove();
  });
});
