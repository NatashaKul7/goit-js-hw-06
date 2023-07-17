// Отримуємо доступ до форми
// Вішаємо слухача подій submit на кнопку
// Прибираємо перезавантаження сторінки за замовчуванням
// за допомогою preventDefault
// Робимо перевірку на заповлення всіх полей і виводимо 
// alert, якщо якесь поле пусте
// В іншому випадку (коли два поля заповлені), створюємо об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості
// До значення властивостей достукуємося через form
// Виводимо об'єкт в консоль і при відправці форми очищаємо поля методом reset



const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) { 
    e.preventDefault();
    console.dir(form);
    if (form.elements.email.value === "" || form.elements.password.value === "") {
        alert(`Всі поля повинні бути заповленні`);
    } else {
        const obj = {
            email: form.email.value,
            password: form.password.value,
        };
        console.log(obj);
    }
    form.reset();
};
