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