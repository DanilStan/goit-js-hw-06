
const allCategories = document.querySelector('#categories');

// console.log(allCategories);

const sumAllCategories = allCategories.querySelectorAll('.item');

console.log(`Number of categories: ${sumAllCategories.length}`);
console.log('');

const AllTitleEl = document.querySelectorAll('h2');
const AllListItem = allCategories.querySelectorAll('ul');

// console.log(AllTitleEl)

// First Category Items

const firstTitleEl = `Elements: ${AllTitleEl[0].textContent}`;
console.log(firstTitleEl);

const firstListItem = AllListItem[0].querySelectorAll('li');
console.log(`Elements: ${firstListItem.length}`);
console.log('');

// Two Category Items
const twoTitleEl = `Elements: ${AllTitleEl[1].textContent}`;
console.log(twoTitleEl);

const twoListItem = AllListItem[1].querySelectorAll('li');
console.log(`Elements: ${twoListItem.length}`);
console.log('');


// Three Category Items
const threeTitleEl = `Elements: ${AllTitleEl[2].textContent}`;
console.log(threeTitleEl);

const threeListItem = AllListItem[2].querySelectorAll('li');
console.log(`Elements: ${threeListItem.length}`);