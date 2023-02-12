import { backPlan, projects } from './data.js'

const planFragment = document.createDocumentFragment()
const backFragment = document.createDocumentFragment()
const dialog = document.querySelector('dialog.max-w-3xl')
const modalProject = document.querySelector('dialog.w-90.nav-d')
const projectsFragment = document.createDocumentFragment()
const planTemplate = document.getElementById('planTemplate').content
const backTemplate = document.getElementById('backplanTemplate').content
const projectTemplate = document.getElementById('projectTemplate').content


document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        const menu = document.querySelector('menu')
        menu.classList.contains('hidden')? event.target.setAttribute('src', './assets/close-menu.svg') : event.target.setAttribute('src', './assets/hamburger.svg')
        menu.classList.toggle('hidden')
    }else if(event.target.matches('article:not(.opacity-60) > button.b-full')) {
        dialog.showModal()
    }else if(event.target.matches('dialog > button')) {
        dialog.close()
    }else if(event.target.matches('main > article div > button.b-full')) {
        modalProject.showModal()
    }else if(event.target.matches('dialog.nav-d > div > img')) {
        modalProject.close()
    }else if(event.target.matches('dialog.nav-d section :is(article, div, h3, span, p)')) {
        const parentElement = parentNode(event.target, 'article.w-full.flex.flex-col')
        const exist = document.querySelector('article.border-2-cyan')  
        if(!parentElement.classList.contains('opacity-60')) {
            if(exist)
                exist.classList.remove('border-2-cyan')
            parentElement.classList.add('border-2-cyan')
        }
    }
})


backPlan.forEach((plan, index) => {
    const planData = { json: plan, headNode: 'div.w-full > div > h3', subNode: 'div.w-full > div > p', maiNode: 'div.w-full + p', numNode: 'div.flex > span.text-base' }
    replaceValuesTemplate(backTemplate, backFragment, planData)
    if(index > 0) {
        const back =  { json: plan, headNode: 'div > h4.font-semibold', subNode: 'div > p.font-medium', maiNode: 'div + p', numNode: 'div.flex > span.text-base' }
        replaceValuesTemplate(planTemplate, planFragment, back)
    }
})
document.querySelector('nav + dialog > section').append(backFragment)
document.querySelector('main > section > section').append(planFragment)


projects.forEach(project => {
    const { title, subtitle} = project
    const cloneNode = document.importNode(projectTemplate, true)
    cloneNode.querySelector('h3.text-black').textContent = title
    cloneNode.querySelector('p.text-gray').textContent = subtitle
    projectsFragment.append(cloneNode)
})
const line = document.querySelector('#projectTemplate + span')
document.querySelector('section.my-5.px-2.flex-flow').insertBefore(projectsFragment, line)


/**
 * @typedef {Object} planObject
 * @property {Object} json
 * @property {String} headNode
 * @property {String} subNode
 * @property {String} maiNode
 * @property {String} numNode
 * @param {Element} template
 * @param {DocumentFragment} fragment
 * @param {planObject} object 
 */
function replaceValuesTemplate(template, fragment, {json, headNode, subNode, maiNode, numNode = ''}) {
    const { title, subtitle, content, state, number} = json
    const cloneNode = document.importNode(template, true)
    cloneNode.querySelector(headNode).textContent = title
    cloneNode.querySelector(subNode).textContent = subtitle
    cloneNode.querySelector(maiNode).textContent = content
    numNode? cloneNode.querySelector(numNode).textContent = number : ''
    !state? cloneNode.firstElementChild.classList.add('opacity-60') : ''
    fragment.append(cloneNode)
}


/**
 * 
 * @param {Element} currentNode 
 * @param {String} classList 
 * @returns {Element} parentElementNode
 */
function parentNode(currentNode, classList) {
    if(currentNode == document.body) {
        return null
    }else {
        if(currentNode.matches(classList))
            return currentNode
        else
            return parentNode(currentNode.parentElement, classList)
    }
}