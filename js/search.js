/* Обработка поиска товаров Search на примукнутной к верхней границе панели */

const input     = document.querySelector('.search__input input');
const catalogid = getUrlParameter('catalogid'); 
const search    = getUrlParameter('search');

input.value = search;

input.addEventListener('input', async (ctx) => {
    const text = input.value;
    await showProducts(0, count, catalogid, text);
})

/* Обработка поиска товаров Search на примукнутной к верхней границе панели */
