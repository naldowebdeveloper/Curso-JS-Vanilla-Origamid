// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('.faq-lista')
const dt = dl.children[0]
console.log(dt)

// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;
console.log(dd)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')
const animaisHTML = animais.innerHTML;

faq.innerHTML = animaisHTML