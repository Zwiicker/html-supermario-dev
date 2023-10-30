/*
1. Abrir o Modal ao Clicar no Botão 'Veja o Trailer':

  -Primeiro, identifique o botão que tem o texto "Veja o Trailer".
  -Quando esse botão for clicado, ative uma ação.
  -Em seguida, localize o elemento que representa o modal.
  -Exiba o modal na tela para o usuário.

2.Fechar o Modal ao Clicar no 'X' Dentro do Modal:

  -Encontre o elemento que representa o botão "X" dentro do modal.
  -Quando o usuário clicar nesse botão "X", ative uma ação.
  -Encontre novamente o elemento que representa o modal.
  -Oculte o modal da tela para fechá-lo.
*/

const trailerButton = document.querySelector('.trailer-button')//O botão que é clicado para abrir o modal de vídeo.
const btnCloseModal = document.querySelector('.close-modal')//O botão dentro do modal que permite fechar o modal.

const modal = document.querySelector('.modal')//O elemento que representa o modal em si.

const iframeTrailer = document.getElementById('video') //O elemento <iframe> que contém o vídeo.
const urlVideo = iframeTrailer.src //O URL inicial do vídeo.

function alternarModal() { //Esta função alterna a classe open no elemento modal. Isso significa que ela adicionará a classe se não estiver presente, e a removerá se estiver.
  modal.classList.toggle('open')
}

trailerButton.addEventListener('click', () => {
  alternarModal() //Esta linha chama a função alternarModal que foi definida anteriormente. 
  iframeTrailer.setAttribute("src", urlVideo) //Esta linha atualiza o atributo src do elemento <iframe> (iframeTrailer) com o URL do vídeo armazenado na variável urlVideo. Isso faz com que o vídeo apropriado seja carregado no modal.
})

btnCloseModal.addEventListener('click', () => {
  alternarModal() //Esta linha chama a função alternarModal que foi definida anteriormente. 
  iframeTrailer.setAttribute("src", "") //Esta linha define o atributo src do elemento <iframe> como uma string vazia (""). Isso faz com que o vídeo seja removido do elemento <iframe>, efetivamente parando a reprodução do vídeo e "limpando" o elemento para quando o modal for aberto novamente.
})