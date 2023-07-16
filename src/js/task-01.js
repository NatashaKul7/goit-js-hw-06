const categories = document.querySelectorAll('#categories');
const allItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${allItems.length}`);


allItems.forEach((item) => { 
    const title = item.querySelector('h2').textContent; 
    const categoryElements = item.querySelectorAll('li');

    console.log(`Category: ${title}`);
    console.log(`Elements: ${categoryElements.length}`)
})













