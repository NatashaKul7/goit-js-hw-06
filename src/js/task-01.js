// Отримуємо доступи до categories та item
// Виводимо в консоль загальну кількість категорій
// Застосовуємо метод forEach до всіх item
// Отримуємо доступ до текстового вмісту заголовка всеередені item та до кожної li  
// Виводимо результат у консоль

const categories = document.querySelectorAll('#categories');
const allItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${allItems.length}`);


allItems.forEach((item) => { 
    // const title = item.querySelector('h2').textContent; 
    // const categoryElements = item.querySelectorAll('li');

    const title =  item.firstElementChild.textContent; 
    const categoryElements = item.lastElementChild.children;


    console.log(`Category: ${title}`);
    console.log(`Elements: ${categoryElements.length}`)
})













