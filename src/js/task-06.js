// Отримуємо доступ до input
// Отримуємо значення атрибуту data-length за допомогою dataset
// Вішаємо на нього прослухувач подіі "blur"
// Робимо перевірку умови на правильну кількість цифр


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
    
