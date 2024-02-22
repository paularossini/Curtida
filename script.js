var curtidas = 0;
const carro = document.querySelector('.carro')

carro.addEventListener('dblclick',  (e) => {// dblclick = 2 clicks
    curtidas++;
    document.getElementById('vezes').innerText = curtidas;
    mostraCoracao(e)
});

const mostraCoracao = (e) => {
    //Cria html
    const coracao = document.createElement('i')
    coracao.classList.add('bi')
    coracao.classList.add('bi-heart-fill')
    coracao.classList.add('heart-red')
    
    //pega o lugar do click
    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    coracao.style.top = `${yInside}px`
    coracao.style.left = `${xInside}px`

    carro.appendChild(coracao)
    setTimeout(() => coracao.remove(), 1000)
}

 /*       
const carro = document.querySelector('.carro')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

carro.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}*/