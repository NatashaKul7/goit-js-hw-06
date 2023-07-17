// Отримуємо доступ до input
// Отримуємо значення атрибуту data-length за допомогою dataset та приводимо його значення до числа
// Вішаємо на нього прослухувач подіі "blur"
// Робимо перевірку умови на правильну кількість цифр
// Додаємо і видаляємо класи valid та invalid та відображення стилів в залежності від виконання умови вводу


const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);

// console.log(inputLength);

input.addEventListener("blur", validateInput);

function validateInput(e) { 

    if (Number(e.currentTarget.value.length) === Number(inputLength)) {
        Number(e.currentTarget.value.length) === inputLength;

        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
    
