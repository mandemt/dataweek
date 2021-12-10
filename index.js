const oranjeKnop = document.querySelector('.button:first-of-type')
const blauweKnop = document.querySelector('.button:nth-of-type(2)')
const rodeKnop = document.querySelector('.button:nth-of-type(3)')

const oranje = document.querySelector('.oranje')
const blauw = document.querySelector('.blauw')
const rood = document.querySelector('.rood')



function rodeRoute() {
    rood.classList.add('verdwijn')
    blauw.classList.remove('verdwijn')
    oranje.classList.remove('verdwijn')

}

function blauweRoute() {
    blauw.classList.add('verdwijn')
    rood.classList.remove('verdwijn')
    oranje.classList.remove('verdwijn')


}

function oranjeRoute() {
    oranje.classList.add('verdwijn')
    rood.classList.remove('verdwijn')
    blauw.classList.remove('verdwijn')


}

oranjeKnop.addEventListener('click', oranjeRoute)
blauweKnop.addEventListener('click', blauweRoute)
rodeKnop.addEventListener('click', rodeRoute)

