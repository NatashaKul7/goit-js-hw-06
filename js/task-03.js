const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Отримуємо доступ до gallery
// Перебираємо масив об'єктів images за допомогою map
// Через шаблоні строки створюємо елемент <li> з <img> всередині,
// де через інтерполяцію додаємо значення url і alt
// та збираємо в один масив за допомогою join()
// Додаємо розмітку у галерею методом insertAdjacentHTML()
// Додаємо мінімальну розмітку у css файл

const gallery = document.querySelector(".gallery");

const markup = images.map((image) => {
  return `<li class="imgGallery" >
    <img src="${image.url}" alt="${image.alt}" width="300" height="300">
  </li>`;
}).join("");
  
gallery.insertAdjacentHTML("beforeend", markup);
