

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
    const activeClass = 'ativo'

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        //função de colocar class 
        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }
        
        //intera sobre os elementos
        accordionList.forEach((item) => {

            //evento de click função callback
            item.addEventListener("click", activeAccordion)
        })
    }
}
initAccordion()

function initScrollSuave() {
    //seleciona itens do menu
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    //função do scroll
    function scrollToSection(event) {
        //tira o efeito padrão
        event.preventDetault;
        //pega o item atual
        const href = event.currentTarget.getAttribute('href') 
        //passa o item 
        const section = document.querySelector(href)
        //methodo com objeto de funcionalidades 
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    //interar pelos links
    linksInternos.forEach((link) => {
        //faz o envento de click na função
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave()