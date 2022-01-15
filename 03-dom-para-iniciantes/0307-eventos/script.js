// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function eventLink(evt){
    evt.preventDefault()
    linksInternos.forEach(link => link.classList.remove('ativo'))
    this.classList.add('ativo')
}

linksInternos.forEach(link => {
    link.addEventListener('click', eventLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const all = document.querySelectorAll('body *')

function elementoClicado(evt) {
    console.log(evt.currentTarget)
    evt.preventDefault()
    //evt.target.remove()
}

all.forEach(element => {
    element.addEventListener('click', elementoClicado)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboard(event) { 
    console.log(event.key)
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
  } 
   
window.addEventListener('keydown', handleKeyboard); 