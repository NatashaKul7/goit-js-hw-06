// Перебираємо масив ingredients методом map
// Всередині масиву за лопомогою createElement створюємо елемент <li>
// Вішаємо на <li> клас item
// Привласнюємо кожному елементу <li> назву інгрідієнту
// Отрімуємо оступ до списку ul#ingredients
// Вставляємо усі < li > за одну операцію у список ul#ingredients 


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItem = ingredients.map(ingredient => {
  const elem = document.createElement('li');
  elem.classList.add('item');
  elem.textContent = (`${ingredient}`);
  return elem;
});

const ulList = document.getElementById('ingredients');
ulList.append(...listItem);