
const allCategories = document.querySelector('#categories');

console.log('Number of categories:', allCategories.children.length);

[...allCategories.children].forEach((item) => {
    console.log(item.querySelector('h2').textContent);
    console.log(item.querySelectorAll('li').length);
})


// -----------------------------------------------------------------



    // console.log(item);
    // console.log(item.querySelector('h2').textContent);
    // console.log(item.querySelector('li').length);
