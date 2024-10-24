<?php
// Ваш Telegram API токен и ID чата
$token = "7670906464:AAGJ1iUIfF58lt6eqLCgoJioS7NjxL37sAI";  // Замените на ваш токен
$chat_id = "1750693728";       // Замените на ID чата, куда отправлять сообщения

// Получение данных из формы
$name = $_POST['name'];         // Имя из формы
$phone = $_POST['phone'];       // Телефон из формы
$message = $_POST['message'];   // Сообщение из формы
$isUrgent = $_POST['urgent']; //Is it urgent or not

// Формирование текста сообщения
$text = "📝 <b>Новое сообщение с сайта:</b>\n"
      . "👤 Имя: <i>$name</i>\n"
      . "📞 Телефон: <i>$phone</i>\n"
      . "💬 Сообщение: <i>$message</i>"
      . "🚨 Пометка срочности: $isUrgent";

// URL для отправки запроса в Telegram API
$url = "https://api.telegram.org/bot$token/sendMessage";

// Данные, которые мы отправляем в Telegram
$data = [
    'chat_id' => $chat_id,
    'text' => $text,
    'parse_mode' => 'HTML', // Чтобы Telegram поддерживал HTML форматирование
  ];

// Использование cURL для отправки данных
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Выполнение запроса и получение результата
$response = curl_exec($curl);
curl_close($curl);

// Проверка ответа и вывод результата
if ($response) {
  echo "Сообщение успешно отправлено!";
} else {
  echo "Ошибка при отправке сообщения!";
}
?>