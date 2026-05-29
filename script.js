const cartas = [
  {
    nome: "O Louco",
    significado: "Novos começos, liberdade, aventura e fé no desconhecido.",
    imagem: "imagens/louco.png",
    simNao: 60
  },
  {
    nome: "O Mago",
    significado: "Manifestação, habilidade, ação e poder de realização.",
    imagem: "imagens/mago.png",
    simNao: 95
  },
  {
    nome: "A Sacerdotisa",
    significado: "Intuição, mistério, sabedoria interior e conhecimento oculto.",
    imagem: "imagens/sacerdotisa.png",
    simNao: 50
  },
  {
    nome: "A Imperatriz",
    significado: "Criatividade, abundância, cuidado e crescimento.",
    imagem: "imagens/imperatriz.png",
    simNao: 95
  },
  {
    nome: "O Imperador",
    significado: "Estrutura, liderança, disciplina e autoridade.",
    imagem: "imagens/imperador.png",
    simNao: 90
  },
  {
    nome: "O Hierofante",
    significado: "Tradição, aprendizado, espiritualidade e orientação.",
    imagem: "imagens/hierofante.png",
    simNao: 75
  },
  {
    nome: "Os Enamorados",
    significado: "Escolhas, relacionamentos, alinhamento e valores.",
    imagem: "imagens/enamorados.png",
    simNao: 80
  },
  {
    nome: "O Carro",
    significado: "Determinação, movimento, conquista e direção.",
    imagem: "imagens/carro.png",
    simNao: 95
  },
  {
    nome: "A Justiça",
    significado: "Equilíbrio, verdade, responsabilidade e consequências.",
    imagem: "imagens/justica.png",
    simNao: 60
  },
  {
    nome: "O Eremita",
    significado: "Reflexão, silêncio, sabedoria interior e autoconhecimento.",
    imagem: "imagens/eremita.png",
    simNao: 40
  },
  {
    nome: "A Roda da Fortuna",
    significado: "Mudanças, ciclos, destino e oportunidades.",
    imagem: "imagens/roda.png",
    simNao: 70
  },
  {
    nome: "A Força",
    significado: "Coragem, autocontrole, confiança e força interior.",
    imagem: "imagens/forca.png",
    simNao: 90
  },
  {
    nome: "O Pendurado",
    significado: "Nova perspectiva, pausa, entrega e compreensão.",
    imagem: "imagens/enforcado.png",
    simNao: 30
  },
  {
    nome: "A Morte",
    significado: "Transformação, encerramentos e renascimento.",
    imagem: "imagens/morte.png",
    simNao: 50
  },
  {
    nome: "A Temperança",
    significado: "Moderação, harmonia, integração e paciência.",
    imagem: "imagens/temperanca.png",
    simNao: 75
  },
  {
    nome: "O Diabo",
    significado: "Apego, desejos, sombras e limitações.",
    imagem: "imagens/diabo.png",
    simNao: 65
  },
  {
    nome: "A Torre",
    significado: "Ruptura, revelação, mudança repentina e libertação.",
    imagem: "imagens/torre.png",
    simNao: 10
  },
  {
    nome: "A Estrela",
    significado: "Esperança, inspiração, cura e confiança no futuro.",
    imagem: "imagens/estrela.png",
    simNao: 95
  },
  {
    nome: "A Lua",
    significado: "Inconsciente, intuição, ilusões e emoções profundas.",
    imagem: "imagens/lua.png",
    simNao: 45
  },
  {
    nome: "O Sol",
    significado: "Clareza, alegria, vitalidade e sucesso.",
    imagem: "imagens/sol.png",
    simNao: 100

  },
  {
    nome: "O Julgamento",
    significado: "Despertar, chamado, renovação e avaliação.",
    imagem: "imagens/julgamento.png",
    simNao: 95
  },
  {
    nome: "O Mundo",
    significado: "Conclusão, realização, integração e plenitude.",
    imagem: "imagens/mundo.png",
    simNao: 100
  }
];

const botao = document.getElementById("tirarCarta");
const nomeCarta = document.getElementById("nomeCarta");
const significadoCarta = document.getElementById("significadoCarta");
const perguntaInput = document.getElementById("pergunta");
const perguntaExibida = document.getElementById("perguntaExibida");
const imagemCarta = document.getElementById("imagemCarta");
const contador = document.getElementById("contador");
const yesNo = document.getElementById("simNao")
const yesNoResp = document.getAnimations("simNaoResp")
let tiragens = 0;
let numeroAnterior = null;

botao.addEventListener("click", function () {
  const pergunta = perguntaInput.value;
  tiragens = tiragens + 1;
  let numeroAleatorio = Math.floor(Math.random() * cartas.length);
  while (numeroAleatorio === numeroAnterior) { 
    numeroAleatorio = Math.floor(Math.random() * cartas.length)
    
  }
  numeroAnterior = numeroAleatorio
  const cartaSorteada = cartas[numeroAleatorio];

  
  if (pergunta.trim() !== "") {
  perguntaExibida.textContent = "Pergunta: " + pergunta;
} else {
  perguntaExibida.textContent = "";
}

  
  nomeCarta.textContent = cartaSorteada.nome;
  significadoCarta.textContent = cartaSorteada.significado;
  yesNo.textContent = "Sim ou Não: " + cartaSorteada.simNao + ' %'

  
  imagemCarta.src = cartaSorteada.imagem;
  imagemCarta.alt = cartaSorteada.nome;
  imagemCarta.style.display = "block";
  contador.textContent = "Tiragens realizadas: " + tiragens;
  
  
  
});