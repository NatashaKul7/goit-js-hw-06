// Отримуємо доступи до name-input і name-output
// Вішаємо прослуховувач подій "input" на nameInput
// При подіі іnput текст output змінюється на поточне 
// значення input або строка "Anonymous", якщо поле пусте 
// Виводимо в консоль результат



const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value || "Anonymous";
});
console.log(nameOutput);