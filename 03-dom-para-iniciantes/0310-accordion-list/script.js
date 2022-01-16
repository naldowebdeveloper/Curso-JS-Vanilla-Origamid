

function initTabNav() {
    //seleciona os elementos
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    //Verifica se tem e adiciona a class ativo
    if(tabContent.length && tabMenu.length) {
        tabContent[0].classList.add('ativo')

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
    }
}
initTabNav()

function initAccordion() {
    //seleciona o elemento
    const accordionList = document.querySelectorAll('.js-accordion dt')

    //função de colocar class 
    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }
    
    //intera sobre os elementos
    accordionList.forEach((item) => {

        //evento de click função callback
        item.addEventListener("click", activeAccordion)
    })
}
initAccordion()

