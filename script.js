// Получаем необходимые элементы
const header = document.querySelector("header");
const contactButton = document.querySelector("#contact-to-master");
const numberButton = document.querySelector(".call-to-locksmith");
const mainContainer = document.querySelector(".main-container");
const feedbackFormContainer = document.querySelector(
  ".feedback-form-container"
);
// Анимация элементов на странице при загрузке
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
  feedbackFormContainer.remove(); // Убираем форму из DOM до открытия
});

// Создание модального окна для формы
contactButton.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  header.style.filter = "blur(3px)";
  mainContainer.style.filter = "blur(3px)";

  // Создание контейнера для модального окна
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  // Вставка формы в контейнер и добавление в DOM
  modalContainer.appendChild(feedbackFormContainer);
  document.body.appendChild(modalContainer);

  // Закрытие модального окна
  modalContainer.querySelector(".close-modal").addEventListener("click", () => {
    document.body.style.overflow = "auto";
    header.style.filter = "none";
    mainContainer.style.filter = "none";
    document.body.removeChild(modalContainer);
    feedbackFormContainer.remove(); // Удаляем форму из DOM после закрытия
  });
});
