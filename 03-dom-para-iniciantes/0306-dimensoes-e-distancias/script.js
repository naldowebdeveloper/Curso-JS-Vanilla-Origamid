// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img')
const imgTop = img.offsetTop
console.log(imgTop)

// Retorne a soma da largura de todas as imagens

function somaImagens() {
    const images = document.querySelectorAll('img')
    let soma = 0;

    images.forEach(item => {
        soma += item.offsetWidth
        console.log(soma)
    })
    console.log(soma)
}

window.onload = function() {
    somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
links.forEach(item => {
    const valida = item.offsetWidth >= 48 && item.offsetHeight >= 48
    if (valida) {
        console.log('Possui boa acessibilidade')
    }else{
        console.log('Não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const largura = window.matchMedia('(max-width: 720px)')
const itemMenu = document.querySelector('nav.menu')

if (largura.matches) {
    itemMenu.classList.add('menu-mobile')
}