function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const imageUrls = [
    './imgs/1.jpeg',
    './imgs/2.jpeg',
    './imgs/4.jpeg',
    './imgs/5.jpeg',
    './imgs/6.jpeg',
    './imgs/7.jpeg',
    './imgs/8.jpeg',
    './imgs/9.jpeg',
    './imgs/10.jpeg',
    './imgs/11.jpeg',
    './imgs/12.jpeg',
    './imgs/13.jpeg',
    './imgs/14.jpeg',
    './imgs/16.jpeg',
    './imgs/17.jpeg',
    './imgs/18.jpeg',
    './imgs/19.jpeg',
    './imgs/20.jpeg',
    './imgs/21.jpeg',
    './imgs/22.jpeg',
    './imgs/23.jpeg',
    './imgs/24.jpeg',
    './imgs/25.jpeg',
    './imgs/26.jpeg',
    './imgs/27.jpeg',
    './imgs/28.jpeg',
    './imgs/29.jpeg',
    './imgs/30.jpeg',
    './imgs/31.jpeg',
    './imgs/32.jpeg',
    './imgs/33.jpeg',
    './imgs/34.jpeg',
    './imgs/35.jpeg',
    './imgs/36.jpeg',
    './imgs/37.jpeg',
    './imgs/38.jpeg',
    './imgs/39.jpeg',
    './imgs/40.jpeg',
    './imgs/41.jpeg',
    './imgs/42.jpeg',
    './imgs/43.jpeg',
    './imgs/44.jpeg',
    './imgs/45.jpeg',
];

const mensagens = [
    'Esse é o Presente Do Seu Amigo Matheus 😁',
    'Aqui Estão Alguns Dos Melhores Momentos Do Nosso Grupo😊',
    'Espero Que Ele Possa Te Encontrar Sempre Que Sentir Saudades',
    'Agradeço Por Todas As Nossas Memorias!',
    'Fico Extremamente Feliz Em Poder Compartilhar Momentos Únicos Com Você',
    'Que Este Álbum De Fotografias Se Constitua Em Uma Lembrança Duradoura De Todos Os Momentos Inesquecíveis Que Compartilhamos.'
];

const shuffledImageUrls = shuffleArray(imageUrls);
const albumDiv = document.getElementById('album');

shuffledImageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.classList.add('imagem');
    img.src = url;
    img.alt = `Imagem ${index + 1}`;
    albumDiv.appendChild(img);

    if ((index + 1) % 3 === 0 && mensagens.length > 0) {
        const msg = document.createElement('p');
        msg.classList.add('mensagem');
        msg.textContent = mensagens.shift();
        albumDiv.appendChild(msg);
    }
});


// Função para verificar se um elemento está visível na viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
    // Considera que o elemento está visível se pelo menos 50% dele estiver na viewport
    return (
        rect.top + rect.height * 0.5 >= 0 &&
        rect.left >= 0 &&
        rect.bottom - rect.height * 0.5 <= windowHeight &&
        rect.right <= windowWidth
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
