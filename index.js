// Array de URLs das imagens
const imageUrls = [
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png',
    './imgs/media.png'
    // Adicione mais URLs conforme necessário
];

// Array de mensagens
const mensagens = [
    'Aqui está sua primeira surpresa! 🎉',
    'Esperamos que você goste! 🎁',
    'Continue descendo para mais! 🎈',
];

// Função para gerar imagens dinamicamente
const albumDiv = document.getElementById('album');
imageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.classList.add('imagem');
    img.src = url;
    img.alt = `Imagem ${index + 1}`;
    albumDiv.appendChild(img);

    // Insere uma mensagem a cada 3 imagens, ou conforme o critério desejado
    if ((index + 1) % 3 === 0 && mensagens.length > 0) {
        const msg = document.createElement('p');
        msg.classList.add('mensagem');
        msg.textContent = mensagens.shift(); // Remove a primeira mensagem do array
        albumDiv.appendChild(msg);
    }
});

// Função para gerar as mensagens adicionais (caso tenha)
const mensagensDiv = document.getElementById('mensagens');
mensagens.forEach((mensagem, index) => {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.classList.add('mensagem');
    const p = document.createElement('p');
    p.textContent = `Mensagem ${index + 1}: ${mensagem}`;
    mensagemDiv.appendChild(p);
    mensagensDiv.appendChild(mensagemDiv);
});

const imagens = document.querySelectorAll('.imagem');
imagens.forEach(imagem => {
    const tamanhoAleatorio = Math.floor(Math.random() * 150) + 150;
    imagem.style.width = `${tamanhoAleatorio}px`;
    imagem.style.height = 'auto';
});

// Função para verificar se um elemento está visível na viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'visible' às mensagens quando a seção do álbum se torna visível
function handleScroll() {
    const albumSection = document.querySelector('.album');
    const mensagens = document.querySelectorAll('.mensagem');
}


function handleScroll() {
    const imagens = document.querySelectorAll('.imagem');
    imagens.forEach(imagem => {
        if (isInViewport(imagem)) {
            imagem.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
