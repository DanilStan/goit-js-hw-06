const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const emptyList = ingredients.map(ingredient => {
  const item = document.createElement('li');
  // console.log(item);
  item.textContent = ingredient;
  item.classList.add('item');

  return item;
})

const primaryList = document.querySelector('#ingredients');
primaryList.append(...emptyList);