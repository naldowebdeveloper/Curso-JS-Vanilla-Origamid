// nomeie 3 propriedades ou métodos de strings
var nome = 'ED'

nome.length
nome.indexOf('E')
nome.split('E')

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('#red')
btn.addEventListener('click', () => alert('teste ok'))
btn.textContent = 'Button'
btn.innerHTML += ' <spa>ok</spa>'
btn.style.backgroundColor = 'lime'


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var body = document.querySelector('body')
var button = document.createElement('button')
button.innerText = 'clique aqui'
button.innerText += ' clique aqui2'
body.append(button)

var button =  document.querySelector('button')
button.addEventListener('click', function execCopy() {
    document.querySelector("span");
    document.execCommand("copy");
  })