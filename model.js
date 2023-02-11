const dialog = document.querySelector('dialog.max-w-3xl')


document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        const menu = document.querySelector('menu')
        if(menu.classList.contains('hidden')) {
            event.target.setAttribute('src', './assets/close-menu.svg')
        }else {
            event.target.setAttribute('src', './assets/hamburger.svg')
        }
        menu.classList.toggle('hidden')
    }else if(event.target.matches('article:not(.opacity-60) > button.h-4.rounded-full')) {
        dialog.classList.add('active')
        dialog.showModal()
    }else if(event.target.matches('dialog > button')) {
        dialog.classList.remove('active')
        dialog.close()
    }
})
