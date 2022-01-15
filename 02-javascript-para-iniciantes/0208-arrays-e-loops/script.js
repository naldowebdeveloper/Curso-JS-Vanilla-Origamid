// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var i = 0; i < anosCopa.length; i++){
    console.log(`O brasil ganhou a copa de ${anosCopa[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++) {
    if(frutas[i] === 'Pera'){
        console.log(frutas[i])
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

//var arrayPop = frutas.pop()

frutas.forEach(function(item, index, array){
    var newArray =  array[array.length - 1]
    console.log(newArray)
})