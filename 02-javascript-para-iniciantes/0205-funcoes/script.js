// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(nome) {
  return nome === 'Ednaldo'
}

console.log(verificaTruthy('Ednaldo'))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro (num) {
  return num * 4
}

perimetro(10)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

var nome = 'Ednaldo'
    sobreNome = 'Brito'

function nomeCompleto (nome, sobreNome) {
  return nome + ' ' + sobreNome
}

nomeCompleto(nome, sobreNome)

// Crie uma função que verifica se um número é par

function par(num) {
  if(num % 2  === 0){
    return console.log('É par', num)
  }
}

par(8)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipo(item) {
  return typeof item
}

tipo(true) 

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function text() {
  return console.log('Ednaldo Brito')
}

addEventListener('scroll', text)

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
