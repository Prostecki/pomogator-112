// const submitForm = document.querySelector(".form-submit");

// submitForm.addEventListener("click", postUserData);

// async function postUserData(event) {
//   event.preventDefault();
//   //Function of current date
//   const now = new Date();
//   const formattedDate = now.toLocaleString("ru-RU", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });

//   const name = document.getElementById("name").value;
//   const phoneNumber = document.getElementById("phone").value;
//   const message = document.getElementById("message").value;
//   const checkboxUrgent = document.getElementById("urgent");
//   const isUrgent = checkboxUrgent.checked
//     ? "Повышенная срочность"
//     : "Не к спеху";
//   console.log("Состояние срочности:", isUrgent);

//   const text = `
//     Обращение от клиента:
//     Дата: ${formattedDate}
//     Имя: ${name}
//     Телефон: ${phoneNumber}
//     Сообщение: ${message}
//     Срочность: ${isUrgent}
// `;

//   try {
//     await sendMessage(apiTokenMark, chatIdMark, text);
//     await sendMessage(apiTokenMax, chatIdMax, text);
//     const data = await response.json();
//     if (data.ok) {
//       alert("Отправка формы выполнена успешно!");
//     } else {
//       throw new Error("Ошибка при отправке формы");
//     }
//   } catch (error) {
//     console.error("Error", error);
//     alert("Не удалось отправить сообщение, попробуйте позже...");
//   }
// }

// async function sendMessage(apiToken, chatId, text) {
//   const response = await fetch(
//     `https://api.telegram.org/bot${apiToken}/sendMessage`,
//     {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: text,
//       }),
//     }
//   );
//   const data = response.json();
//   if (!data.ok) {
//     throw new Error("Ошибка при отправке сообщения", data.status);
//   }
// }
