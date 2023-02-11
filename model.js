import { backPlan, projects } from './data.js'


const planFragment = document.createDocumentFragment()
const backFragment = document.createDocumentFragment()
const dialog = document.querySelector('dialog.max-w-3xl')
const projectsFragment = document.createDocumentFragment()
const planTemplate = document.getElementById('planTemplate').content
const backTemplate = document.getElementById('backplanTemplate').content
const projectTemplate = document.getElementById('projectTemplate').content


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


backPlan.forEach(plan => {
    const { title, subtitle, content, state} = plan
    const cloneNode = document.importNode(backTemplate, true)
    cloneNode.querySelector('div.w-full > div > h3').textContent = title
    cloneNode.querySelector('div.w-full > div > p').textContent = subtitle
    cloneNode.querySelector('div.w-full + p').textContent = content
    !state? cloneNode.firstElementChild.classList.add('opacity-60') : ''
    backFragment.append(cloneNode)
})
document.querySelector('nav + dialog > section').append(backFragment)

projects.forEach(project => {
    const { title, subtitle} = project
    const cloneNode = document.importNode(projectTemplate, true)
    cloneNode.querySelector('h3.text-black').textContent = title
    cloneNode.querySelector('p.text-gray').textContent = subtitle
    projectsFragment.append(cloneNode)
})

const line = document.querySelector('#projectTemplate + span')
document.querySelector('section.my-5.px-2.flex-flow').insertBefore(projectsFragment, line)


backPlan.slice(1).forEach(plan => {
    const { title, subtitle, content, state, number} = plan
    const cloneNode = document.importNode(planTemplate, true)
    cloneNode.querySelector('div > h4.font-semibold').textContent = title
    cloneNode.querySelector('div > p.font-medium').textContent = subtitle
    cloneNode.querySelector('div + p').textContent = content
    cloneNode.querySelector('div.flex > span.text-base').textContent = number
    !state? cloneNode.firstElementChild.classList.add('opacity-60') : ''
    planFragment.append(cloneNode)
})
document.querySelector('main > section > section').append(planFragment)

