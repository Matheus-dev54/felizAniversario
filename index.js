// Array de URLs das imagens
const imageUrls = [
    './imgs/1.jpeg',
    './imgs/2.jpeg',
    './imgs/3.png',
    './imgs/4.jpeg',
    './imgs/5.jpeg',
    './imgs/6.jpeg',
    './imgs/7.jpeg',
    './imgs/8.jpeg',
    './imgs/9.jpeg',
    './imgs/10.jpeg',
    './imgs/11.jpeg'
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

    // Insere uma mensagem a cada 3 imagens
    if ((index + 1) % 3 === 0 && mensagens.length > 0) {
        const msg = document.createElement('p');
        msg.classList.add('mensagem');
        msg.textContent = mensagens.shift(); // Remove a primeira mensagem do array
        albumDiv.appendChild(msg);
    }
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

// Função para adicionar a classe 'visible' às imagens e mensagens ao rolarem para a viewport
function handleScroll() {
    const imagens = document.querySelectorAll('.imagem');
    const mensagens = document.querySelectorAll('.mensagem');

    // Verifica se as imagens estão na viewport e as torna visíveis
    imagens.forEach(imagem => {
        if (isInViewport(imagem)) {
            imagem.classList.add('visible');
        }
    });

    // Verifica se as mensagens estão na viewport e as torna visíveis
    mensagens.forEach(mensagem => {
        if (isInViewport(mensagem)) {
            mensagem.classList.add('visible');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', handleScroll);

// Chama a função handleScroll ao carregar a página
document.addEventListener('DOMContentLoaded', handleScroll);
