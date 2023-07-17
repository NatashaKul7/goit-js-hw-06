// Отрумуємо доступ до input і text
// Вішаємо слухача подій на input
// Створюємо функцію
// Звертаємося до властивості fontSize елемента text
// і присвоюємо їй поточне значення елементу fontSizeControl у пікселях

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


fontSizeControl.addEventListener("input", onInputSizeControl);

function onInputSizeControl(e) {
text.style.fontSize = `${e.target.value}px`;
// return;
}