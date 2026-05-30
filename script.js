const cartas = [

  {
    nome: "O Louco",
    significado: "Novos começos, liberdade, aventura e fé no desconhecido.",
    imagem: "imagens/louco.png",
    simNao: 60,
    tipo: "maior"
  },
  {
    nome: "O Mago",
    significado: "Manifestação, habilidade, ação e poder de realização.",
    imagem: "imagens/mago.png",
    simNao: 95,
    tipo: "maior"
  },
  {
    nome: "A Sacerdotisa",
    significado: "Intuição, mistério, sabedoria interior e conhecimento oculto.",
    imagem: "imagens/sacerdotisa.png",
    simNao: 50,
    tipo: "maior"
  },
  {
    nome: "A Imperatriz",
    significado: "Criatividade, abundância, cuidado e crescimento.",
    imagem: "imagens/imperatriz.png",
    simNao: 95,
    tipo: "maior"
  },
  {
    nome: "O Imperador",
    significado: "Estrutura, liderança, disciplina e autoridade.",
    imagem: "imagens/imperador.png",
    simNao: 90,
    tipo: "maior"
  },
  {
    nome: "O Hierofante",
    significado: "Tradição, aprendizado, espiritualidade e orientação.",
    imagem: "imagens/hierofante.png",
    simNao: 75,
    tipo: "maior"
  },
  {
    nome: "Os Enamorados",
    significado: "Escolhas, relacionamentos, alinhamento e valores.",
    imagem: "imagens/enamorados.png",
    simNao: 80,
    tipo: "maior"
  },
  {
    nome: "O Carro",
    significado: "Determinação, movimento, conquista e direção.",
    imagem: "imagens/carro.png",
    simNao: 95,
    tipo: "maior"
  },
  {
    nome: "A Justiça",
    significado: "Equilíbrio, verdade, responsabilidade e consequências.",
    imagem: "imagens/justica.png",
    simNao: 60,
    tipo: "maior"
  },
  {
    nome: "O Eremita",
    significado: "Reflexão, silêncio, sabedoria interior e autoconhecimento.",
    imagem: "imagens/eremita.png",
    simNao: 40,
    tipo: "maior"
  },
  {
    nome: "A Roda da Fortuna",
    significado: "Mudanças, ciclos, destino e oportunidades.",
    imagem: "imagens/roda.png",
    simNao: 70,
    tipo: "maior"
  },
  {
    nome: "A Força",
    significado: "Coragem, autocontrole, confiança e força interior.",
    imagem: "imagens/forca.png",
    simNao: 90,
    tipo: "maior"
  },
  {
    nome: "O Pendurado",
    significado: "Nova perspectiva, pausa, entrega e compreensão.",
    imagem: "imagens/enforcado.png",
    simNao: 30,
    tipo: "maior"
  },
  {
    nome: "A Morte",
    significado: "Transformação, encerramentos e renascimento.",
    imagem: "imagens/morte.png",
    simNao: 50,
    tipo: "maior"
  },
  {
    nome: "A Temperança",
    significado: "Moderação, harmonia, integração e paciência.",
    imagem: "imagens/temperanca.png",
    simNao: 75,
    tipo: "maior"
  },
  {
    nome: "O Diabo",
    significado: "Apego, desejos, sombras e limitações.",
    imagem: "imagens/diabo.png",
    simNao: 65,
    tipo: "maior"
  },
  {
    nome: "A Torre",
    significado: "Ruptura, revelação, mudança repentina e libertação.",
    imagem: "imagens/torre.png",
    simNao: 10,
    tipo: "maior"
  },
  {
    nome: "A Estrela",
    significado: "Esperança, inspiração, cura e confiança no futuro.",
    imagem: "imagens/estrela.png",
    simNao: 95,
    tipo: "maior"
  },
  {
    nome: "A Lua",
    significado: "Inconsciente, intuição, ilusões e emoções profundas.",
    imagem: "imagens/lua.png",
    simNao: 45,
    tipo: "maior"
  },
  {
    nome: "O Sol",
    significado: "Clareza, alegria, vitalidade e sucesso.",
    imagem: "imagens/sol.png",
    simNao: 100,
    tipo: "maior"

  },
  {
    nome: "O Julgamento",
    significado: "Despertar, chamado, renovação e avaliação.",
    imagem: "imagens/julgamento.png",
    simNao: 95,
    tipo: "maior"
  },
  {
    nome: "O Mundo",
    significado: "Conclusão, realização, integração e plenitude.",
    imagem: "imagens/mundo.png",
    simNao: 100,
    tipo: "maior"
  }
];

const botao = document.getElementById("tirarCarta");
const nomeCarta = document.getElementById("nomeCarta");
const significadoCarta = document.getElementById("significadoCarta");
const perguntaInput = document.getElementById("pergunta");
const perguntaExibida = document.getElementById("perguntaExibida");
const imagemCarta = document.getElementById("imagemCarta");
const yesNo = document.getElementById("simNao")
const seletorDeck = document.getElementById("tipoDeck")
let numeroAnterior = null;

botao.addEventListener("click", function () {
  const pergunta = perguntaInput.value;
  const opcaoEscolhida = seletorDeck.value
  let cartasDisponiveis
 
  if (opcaoEscolhida === "todos") {
  cartasDisponiveis = cartas;
}

if (opcaoEscolhida === "maior") {
  cartasDisponiveis = cartas.filter(function(carta) {
    return carta.tipo === "maior";
  });
}

if (opcaoEscolhida === "menor") {
  cartasDisponiveis = cartas.filter(function(carta) {
    return carta.tipo === "menor";
  });
}
if (cartasDisponiveis.length === 0) {
  alert("Ainda não há cartas disponíveis para essa opção.");
  return;
}
  let numeroAleatorio = Math.floor(Math.random() * cartasDisponiveis.length);
  while (numeroAleatorio === numeroAnterior) { 
    numeroAleatorio = Math.floor(Math.random() * cartasDisponiveis.length)
    
  }
  numeroAnterior = numeroAleatorio
  const cartaSorteada = cartasDisponiveis[numeroAleatorio];

  
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
  
  
  
  
});