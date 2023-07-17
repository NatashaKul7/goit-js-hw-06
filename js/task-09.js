function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Отримуємо доступи до span і кнопки та body 
// Вішаємо слухача подій на кнопку
// Створюємо функцію
// У функції через style знаходимо властивість backgroundColor на body 
// і прирівнюємо до ф-ї getRandomHexColor для регенування кольору
// У span виводимо текст кольору



const text = document.querySelector(".color");
const btn = document.querySelector(".change-color")
const body = document.querySelector("body");

btn.addEventListener("click", onClick);

console.dir(btn);

function onClick(e) { 
 body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
};

