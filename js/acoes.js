//dom

const alvo = document.querySelector('#alvo')

const btalegria = document.querySelector('#btalegria')

const bttristeza = document.querySelector('#bttristeza')

const btnojinho = document.querySelector('#btnojinho')

const btmedo = document.querySelector('#btmedo')

const btinveja = document.querySelector('#btinveja')

const btvergonha = document.querySelector('#btvergonha')

const bttedio = document.querySelector('#bttedio')

const btansiedade = document.querySelector('#btansiedade')

const btraiva = document.querySelector('#btraiva')

//eventos

btalegria.addEventListener('click',gria)

bttristeza.addEventListener('click',teza)

btnojinho.addEventListener('click',inho)

btmedo.addEventListener('click',mdo)

btinveja.addEventListener('click',veja)

btvergonha.addEventListener('click',gonha)

bttedio.addEventListener('click',dio)

btansiedade.addEventListener('click',dade)

btraiva.addEventListener('click',iva)

alvo.addEventListener('click',volta)

//função

function gria(){
    alvo.src ='imagem/alegria.png '
}

function teza(){
    alvo.src='imagem/tristeza.png'
}

function inho(){
    alvo.src='imagem/nojinho.avif'
}

function mdo(){
    alvo.src='imagem/medo.webp'
}

function veja(){
    alvo.src='imagem/inveja.webp'
}

function gonha(){
    alvo.src='imagem/vergonha.webp'
}

function dio(){
    alvo.src='imagem/tedio.avif'
}

function dade(){
    alvo.src='imagem/ansiedade-2.jpg'
}

function iva(){
    alvo.src='imagem/raiva.webp'
}

function volta(){
    alvo.src='imagem/divertida-mente-2-.jpg'
}