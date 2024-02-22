var curtidas = 0;
const carro = document.querySelector('.carro')

carro.addEventListener('dblclick',  (e) => {// dblclick = 2 clicks
    curtidas++;
    document.getElementById('vezes').innerText = curtidas;
    mostraCoracao(e)
});

function mostraCoracao(e) {
    //Cria html
    const coracao = document.createElement('i')
    coracao.classList.add('bi')
    coracao.classList.add('bi-heart-fill')
    coracao.classList.add('heart-red')
    
    //pega as coordenadas do mouse
    var x = e.clientX
    var y = e.clientY

    //Pega em pixels a distância de um elemento em relação ao elemento pai.
    //O inicio do cursor e o canto superior esquerdo da div carro
    var distanciaX = e.target.offsetLeft;
    var distanciaY = e.target.offsetTop;
   
    //Calcula onde ele está
    var posicaoX = x - distanciaX
    var posicaoY = y - distanciaY

    //Add o coraçao do local calculado
    coracao.style.top = `${posicaoY}px`
    coracao.style.left = `${posicaoX}px`
    carro.appendChild(coracao)
    setTimeout(() => coracao.remove(), 800) //tira o coraçao
}