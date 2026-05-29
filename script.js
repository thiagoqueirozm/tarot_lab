const cartas = [
  {
    nome: "O Louco",
    significado: "Novos começos, liberdade, aventura e fé no desconhecido."
  },
  {
    nome: "O Mago",
    significado: "Manifestação, habilidade, ação e poder de realização."
  },
  {
    nome: "A Sacerdotisa",
    significado: "Intuição, mistério, sabedoria interior e conhecimento oculto."
  },
  {
    nome: "A Imperatriz",
    significado: "Criatividade, abundância, cuidado e crescimento."
  },
  {
    nome: "O Imperador",
    significado: "Estrutura, liderança, disciplina e autoridade."
  },
  {
    nome: "O Hierofante",
    significado: "Tradição, aprendizado, espiritualidade e orientação."
  },
  {
    nome: "Os Enamorados",
    significado: "Escolhas, relacionamentos, alinhamento e valores."
  },
  {
    nome: "O Carro",
    significado: "Determinação, movimento, conquista e direção."
  },
  {
    nome: "A Justiça",
    significado: "Equilíbrio, verdade, responsabilidade e consequências."
  },
  {
    nome: "O Eremita",
    significado: "Reflexão, silêncio, sabedoria interior e autoconhecimento."
  },
  {
    nome: "A Roda da Fortuna",
    significado: "Mudanças, ciclos, destino e oportunidades."
  },
  {
    nome: "A Força",
    significado: "Coragem, autocontrole, confiança e força interior."
  },
  {
    nome: "O Enforcado",
    significado: "Nova perspectiva, pausa, entrega e compreensão."
  },
  {
    nome: "A Morte",
    significado: "Transformação, encerramentos e renascimento."
  },
  {
    nome: "A Temperança",
    significado: "Moderação, harmonia, integração e paciência."
  },
  {
    nome: "O Diabo",
    significado: "Apego, desejos, sombras e limitações."
  },
  {
    nome: "A Torre",
    significado: "Ruptura, revelação, mudança repentina e libertação."
  },
  {
    nome: "A Estrela",
    significado: "Esperança, inspiração, cura e confiança no futuro."
  },
  {
    nome: "A Lua",
    significado: "Inconsciente, intuição, ilusões e emoções profundas."
  },
  {
    nome: "O Sol",
    significado: "Clareza, alegria, vitalidade e sucesso."
  },
  {
    nome: "O Julgamento",
    significado: "Despertar, chamado, renovação e avaliação."
  },
  {
    nome: "O Mundo",
    significado: "Conclusão, realização, integração e plenitude."
  }
];

const botao = document.getElementById("tirarCarta");
const nomeCarta = document.getElementById("nomeCarta");
const significadoCarta = document.getElementById("significadoCarta");
const perguntaInput =
  document.getElementById("pergunta");

const perguntaExibida =
  document.getElementById("perguntaExibida");

botao.addEventListener("click", function () {

  const pergunta = perguntaInput.value;

  const numeroAleatorio = Math.floor(Math.random() * cartas.length);
  const cartaSorteada = cartas[numeroAleatorio];

  perguntaExibida.textContent = "Pergunta: " + pergunta;

  nomeCarta.textContent = cartaSorteada.nome;
  significadoCarta.textContent = cartaSorteada.significado;
});