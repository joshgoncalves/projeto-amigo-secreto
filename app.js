//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let nomes = [];

// Declaração das Variáveis
let entradaDeNomes = document.getElementById('entradaDeNomes');
let btnAdicionar = document.getElementById('btnAdicionar');
let listaDeNomes = document.getElementById('listaDeNomes');
let btnSortear = document.getElementById('btnSortear');
let btnNovoJogo = document.getElementById('btnNovoJogo');
let resultadoSorteio = document.getElementById('resultadoSorteio');

// Função para validar se o texto contém apenas letras e espaços
function validarNome(nome) {
  return /^[A-Za-zÀ-ú\s]+$/.test(nome);           // Aceita letras (incluindo acentuadas) e espaços
}

// Função para adicionar nome
btnAdicionar.addEventListener('click', () => {
  let nome = entradaDeNomes.value.trim();
  if (nome && validarNome(nome)) {                // Verifica se o nome é válido
    nomes.push(nome);                             // Adiciona o nome ao array
    atualizarListaNomes();                        // Atualiza a lista na tela
    entradaDeNomes.value = '';                    // Limpa o campo de input
  } else {
    alert('Por favor, insira um nome válido (apenas letras e espaços).');
  }
});

// Função para atualizar a lista de nomes na tela
function atualizarListaNomes() {
  listaDeNomes.innerHTML = '';                    // Limpa a lista atual
  nomes.forEach((nome) => {
    let li = document.createElement('li');
    li.textContent = nome;                        // Exibe apenas o nome
    listaDeNomes.appendChild(li);
  });
}

// Função para sortear um nome
btnSortear.addEventListener('click', () => {
  if (nomes.length > 0) {
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultadoSorteio.textContent = `Nome sorteado: ${sorteado}`;
  } else {
    alert('Adicione nomes antes de sortear.');
  }
});

// Função para reiniciar o jogo
btnNovoJogo.addEventListener('click', () => {
  nomes = [];                                     // Limpa o array de nomes
  listaDeNomes.innerHTML = '';                    // Limpa a lista na tela
  resultadoSorteio.textContent = '';              // Limpa o resultado do sorteio
});