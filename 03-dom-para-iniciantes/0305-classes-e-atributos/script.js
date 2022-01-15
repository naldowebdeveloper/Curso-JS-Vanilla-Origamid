// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach(item => item.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for (let i = 1; i < itensMenu.length; i++) {
    itensMenu[i].classList.remove('ativo')
}

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')

imagens.forEach(item => {
    const possuiAtributo = item.hasAttribute('alt')
    console.log(item, possuiAtributo)
})

// Modifique o href do link externo no menu
const menu = document.querySelector('a[href^="https"]')
menu.setAttribute('href', 'https://www.google.com.br')