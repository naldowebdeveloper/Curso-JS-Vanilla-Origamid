// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
  nome: 'Ednaldo',
  sobreNome: 'Brito',
  idade: 33
}

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobreNome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  anos: 10,
  late(pessoa){
    if(pessoa === 'homem'){
      return 'latir'
    }else{
      return 'nada'
    } 
  }
}

