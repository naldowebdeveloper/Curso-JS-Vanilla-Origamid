//seleciona os elementos
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

function activeTab(index) {
    //remove as classes
    tabContent.forEach(content => content.classList.remove('ativo'))

    //Pega o index do elemento e adiciona a classe
    tabContent[index].classList.add('ativo')
}

//intera nos itens do menu
tabMenu.forEach((itemMenu, index) => {

    //evento de click que chama um callback passando um index
    itemMenu.addEventListener('click', () => {
        activeTab(index)
    })
})

