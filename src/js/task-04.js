// Отримуємо доступ до span value та кнопок
// Створюємо змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника та ініціалізуємо її значенням 0
// Вішаємо прослуховувач подій click на кнопки
// Створюємо функціі для кожноє кнопки, де на одній значення буде зменшуватися, на іншій збільшуватися
// Привласнюємо поточне значення лічільнику


const value = document.getElementById("value");
const decr = document.querySelector("button[data-action='decrement']")
const incr = document.querySelector("button[data-action='increment']")

let counterValue = 0;

decr.addEventListener('click', decrement);
incr.addEventListener('click', increment);

function decrement(e) {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increment(e) { 
    counterValue += 1;
     value.textContent = counterValue;
}