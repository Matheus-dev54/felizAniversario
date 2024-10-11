const musicUrls = [
    './musicas/Yellow.mp3',
    './musicas/The Night We Met.mp3'
];

const audio = document.getElementById('background-music');
let currentTrack = 0;

function playNextTrack() {
    audio.src = musicUrls[currentTrack];
    audio.play();

    currentTrack = (currentTrack + 1) % musicUrls.length;
}

audio.addEventListener('ended', playNextTrack);

document.getElementById('play-music').addEventListener('click', playNextTrack);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const imageUrls = [
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
    './imgs/37.jpeg',
    './imgs/38.jpeg',
    './imgs/40.jpeg',
    './imgs/41.jpeg',
    './imgs/42.jpeg',
    './imgs/43.jpeg',
    './imgs/45.jpeg',
    './imgs/46.jpeg',
    './imgs/47.jpeg',
    './imgs/48.jpeg',
    './imgs/49.jpeg',
    './imgs/50.jpeg',
    './imgs/51.jpeg',
    './imgs/52.jpeg',
    './imgs/53.jpeg',
    './imgs/54.jpeg',
    './imgs/55.jpeg',
    './imgs/56.jpeg',
    './imgs/57.jpeg',
    './imgs/58.jpeg',
    './imgs/59.jpeg',
    './imgs/60.jpeg',
    './imgs/61.jpeg',
    './imgs/62.jpeg',
    './imgs/63.jpeg',
    './imgs/64.jpeg',
    './imgs/65.jpeg',
    './imgs/66.jpeg',
    './imgs/67.jpeg',
    './imgs/68.jpeg',
    './imgs/69.jpeg',
    './imgs/70.jpeg',
    './imgs/71.jpeg',
    './imgs/73.jpeg',
    './imgs/74.jpeg',
    './imgs/75.jpeg',
    './imgs/76.jpeg',
    './imgs/77.jpeg',
    './imgs/78.jpeg',
    './imgs/79.jpeg',
    './imgs/80.jpeg',
    './imgs/81.jpeg',
    './imgs/82.jpeg',
    './imgs/83.jpeg',
    './imgs/84.jpeg',
    './imgs/87.jpeg',
    './imgs/88.jpeg',
    './imgs/89.jpeg',
    './imgs/90.jpeg',
    './imgs/91.jpeg',
    './imgs/92.jpeg',
    './imgs/93.jpeg',
];

const mensagens = [
    'Esse é o Presente Do Seu Amigo Matheus 😁',
    'Aqui Estão Alguns Dos Melhores Momentos Do Nosso Grupo😊',
    'Espero Que Eles Possam Te Encontrar Sempre Que Sentir Saudades',
    'Existe Uma Frase Que Diz "Somos aquilo que permitimos ser transformados pelos outros."',
    'Tenha A Certeza que Você Transformou Uma Parte Em Cada Um De Nós',
    'Criando Uma Pequena Parte De Nossa História, Que Ainda Esta só Começando🤠',
    'Agradeço Por Todas As Nossas Memorias, Momentos E Risadas!',
    'Espero Que Encontre Aquilo Que Procura No Mundo'
];

const fixedImageStartUrl = './imgs/44.jpeg';
const fixedImageEndUrl = './imgs/72.jpeg';

const filteredImageUrls = imageUrls.filter(url => url !== fixedImageStartUrl && url !== fixedImageEndUrl);

const shuffledImageUrls = shuffleArray(filteredImageUrls);

const albumDiv = document.getElementById('album');
const imageSpacing = 10;

const fixedStartImg = document.createElement('img');
fixedStartImg.classList.add('imagem');
fixedStartImg.src = fixedImageStartUrl;
fixedStartImg.alt = 'Imagem 44';
albumDiv.appendChild(fixedStartImg);

shuffledImageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.classList.add('imagem');
    img.src = url;
    img.alt = `Imagem ${index + 1}`;
    albumDiv.appendChild(img);

    if ((index + 1) % imageSpacing === 0 && mensagens.length > 0) {
        const msg = document.createElement('p');
        msg.classList.add('mensagem');
        msg.textContent = mensagens.shift();
        albumDiv.appendChild(msg);
    }
});

// Adiciona a imagem 5 fixa no final
const fixedEndImg = document.createElement('img');
fixedEndImg.classList.add('imagem');
fixedEndImg.src = fixedImageEndUrl;
fixedEndImg.alt = 'Imagem 5';
albumDiv.appendChild(fixedEndImg);



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
    return (
        rect.top + rect.height * 0.5 >= 0 &&
        rect.left >= 0 &&
        rect.bottom - rect.height * 0.5 <= windowHeight &&
        rect.right <= windowWidth
    );
}

function handleScroll() {
    const imagens = document.querySelectorAll('.imagem');
    const mensagens = document.querySelectorAll('.mensagem');

    imagens.forEach(imagem => {
        if (isInViewport(imagem)) {
            imagem.classList.add('visible');
        }
    });

    mensagens.forEach(mensagem => {
        if (isInViewport(mensagem)) {
            mensagem.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
