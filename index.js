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