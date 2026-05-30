const cartas = [
{
  nome: "O Louco",
  significado: "Liberdade, Início, Aventura, Potencial",
  imagem: "imagens/louco.png",
  simNao: 60,
  tipo: "maior",
  elemento: "ar",
  planeta: "Urano",
  signo: "Aquario"
},
{
  nome: "O Mago",
  significado: "Manifestação, Habilidade, Ação, Poder",
  imagem: "imagens/mago.png",
  simNao: 95,
  tipo: "maior",
  elemento: "ar",
  planeta: "Mercurio",
  signo: "Gemeos"
},

{
  nome: "A Sacerdotisa",
  significado: "Intuição, Mistério, Conhecimento, Silêncio",
  imagem: "imagens/sacerdotisa.png",
  simNao: 50,
  tipo: "maior",
  elemento: "agua",
  planeta: "Lua",
  signo: "Cancer"
},

{
  nome: "A Imperatriz",
  significado: "Fertilidade, Abundância, Criação, Beleza",
  imagem: "imagens/imperatriz.png",
  simNao: 95,
  tipo: "maior",
  elemento: "terra",
  planeta: "Venus",
  signo: "Touro"
},

{
  nome: "O Imperador",
  significado: "Estrutura, Autoridade, Liderança, Controle",
  imagem: "imagens/imperador.png",
  simNao: 90,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Marte",
  signo: "Aries"
},

{
  nome: "O Hierofante",
  significado: "Tradição, Ensino, Valores, Sabedoria",
  imagem: "imagens/hierofante.png",
  simNao: 75,
  tipo: "maior",
  elemento: "terra",
  planeta: "Venus",
  signo: "Touro"
},

{
  nome: "Os Enamorados",
  significado: "Escolha, União, Relacionamento, Harmonia",
  imagem: "imagens/enamorados.png",
  simNao: 80,
  tipo: "maior",
  elemento: "ar",
  planeta: "Mercurio",
  signo: "Gemeos"
},

{
  nome: "O Carro",
  significado: "Vitória, Movimento, Determinação, Conquista",
  imagem: "imagens/carro.png",
  simNao: 95,
  tipo: "maior",
  elemento: "agua",
  planeta: "Lua",
  signo: "Cancer"
},

{
  nome: "A Justiça",
  significado: "Equilíbrio, Verdade, Consequência, Ética",
  imagem: "imagens/justica.png",
  simNao: 60,
  tipo: "maior",
  elemento: "ar",
  planeta: "Venus",
  signo: "Libra"
},

{
  nome: "O Eremita",
  significado: "Reflexão, Busca, Sabedoria, Solidão",
  imagem: "imagens/eremita.png",
  simNao: 40,
  tipo: "maior",
  elemento: "terra",
  planeta: "Mercurio",
  signo: "Virgem"
},

{
  nome: "A Roda da Fortuna",
  significado: "Mudança, Destino, Ciclos, Oportunidade",
  imagem: "imagens/roda.png",
  simNao: 70,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Jupiter",
  signo: "Sagitario"
},

{
  nome: "A Força",
  significado: "Coragem, Domínio, Confiança, Superação",
  imagem: "imagens/forca.png",
  simNao: 90,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Sol",
  signo: "Leao"
},

{
  nome: "O Enforcado",
  significado: "Pausa, Sacrifício, Rendição, Perspectiva",
  imagem: "imagens/enforcado.png",
  simNao: 30,
  tipo: "maior",
  elemento: "agua",
  planeta: "Netuno",
  signo: "Peixes"
},

{
  nome: "A Morte",
  significado: "Transformação, Fim, Renascimento, Mudança",
  imagem: "imagens/morte.png",
  simNao: 50,
  tipo: "maior",
  elemento: "agua",
  planeta: "Plutao",
  signo: "Escorpiao"
},

{
  nome: "A Temperança",
  significado: "Moderação, Cura, Harmonia, Integração",
  imagem: "imagens/temperanca.png",
  simNao: 75,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Jupiter",
  signo: "Sagitario"
},

{
  nome: "O Diabo",
  significado: "Desejo, Apego, Tentação, Materialismo",
  imagem: "imagens/diabo.png",
  simNao: 65,
  tipo: "maior",
  elemento: "terra",
  planeta: "Saturno",
  signo: "Capricornio"
},

{
  nome: "A Torre",
  significado: "Ruptura, Choque, Revelação, Colapso",
  imagem: "imagens/torre.png",
  simNao: 10,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Marte",
  signo: "Aries"
},

{
  nome: "A Estrela",
  significado: "Esperança, Inspiração, Fé, Renovação",
  imagem: "imagens/estrela.png",
  simNao: 95,
  tipo: "maior",
  elemento: "ar",
  planeta: "Urano",
  signo: "Aquario"
},

{
  nome: "A Lua",
  significado: "Ilusão, Intuição, Incerteza, Mistério",
  imagem: "imagens/lua.png",
  simNao: 45,
  tipo: "maior",
  elemento: "agua",
  planeta: "Netuno",
  signo: "Peixes"
},

{
  nome: "O Sol",
  significado: "Sucesso, Clareza, Vitalidade, Alegria",
  imagem: "imagens/sol.png",
  simNao: 100,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Sol",
  signo: "Leao"
},

{
  nome: "O Julgamento",
  significado: "Despertar, Chamado, Renovação, Consciência",
  imagem: "imagens/julgamento.png",
  simNao: 90,
  tipo: "maior",
  elemento: "fogo",
  planeta: "Plutao",
  signo: "Escorpiao"
},

{
  nome: "O Mundo",
  significado: "Conclusão, Realização, Integração, Plenitude",
  imagem: "imagens/mundo.png",
  simNao: 100,
  tipo: "maior",
  elemento: "terra",
  planeta: "Saturno",
  signo: "Capricornio"
},
      //PAUS
    {
    nome: "Ás de Paus",
    significado: "Início, Energia, Potencial, Inspiração",
    imagem: "imagens/arcanos-menores/paus/asPaus.png",
    simNao: 95,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Sol",
    signo:"Leao"
  },
  {
    nome: "Dois de Paus",
    significado: "Planejamento, Escolha, Expansão, Visão",
    imagem: "imagens/arcanos-menores/paus/doisPaus.png",
    simNao: 75,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Marte",
    signo:"Aries"
  },
  {
    nome: "Três de Paus",
    significado: "Progresso, Crescimento, Exploração, Oportunidade",
    imagem: "imagens/arcanos-menores/paus/tresPaus.png",
    simNao: 90,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Sol",
    signo:"Aries"
  },
  {
    nome: "Quatro de Paus",
    significado: "Celebração, Estabilidade, Harmonia, Conquista",
    imagem: "imagens/arcanos-menores/paus/quatroPaus.png",
    simNao: 100,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Venus",
    signo:"Aries"
  },
  {
    nome: "Cinco de Paus",
    significado: "Conflito, Competição, Tensão, Desafio",
    imagem: "imagens/arcanos-menores/paus/cincoPaus.png",
    simNao: 40,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Saturno",
    signo:"Leao"
  },
  {
    nome: "Seis de Paus",
    significado: "Vitória, Reconhecimento, Sucesso, Prestígio",
    imagem: "imagens/arcanos-menores/paus/seisPaus.png",
    simNao: 95,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Jupiter",
    signo:"Leao"
  },
  {
    nome: "Sete de Paus",
    significado: "Defesa, Persistência, Coragem, Resiliência",
    imagem: "imagens/arcanos-menores/paus/setePaus.png",
    simNao: 65,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Marte",
    signo:"Leao"
  },
  {
    nome: "Oito de Paus",
    significado: "Movimento, Rapidez, Comunicação, Avanço",
    imagem: "imagens/arcanos-menores/paus/oitoPaus.png",
    simNao: 100,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Mercurio",
    signo:"Sagitario"
  },
  {
    nome: "Nove de Paus",
    significado: "Resiliência, Cautela, Proteção, Experiência",
    imagem: "imagens/arcanos-menores/paus/novePaus.png",
    simNao: 55,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Lua",
    signo:"Sagitario"
  },
  {
    nome: "Dez de Paus",
    significado: "Sobrecarga, Responsabilidade, Esforço, Pressão",
    imagem: "imagens/arcanos-menores/paus/dezPaus.png",
    simNao: 30,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Saturno",
    signo:"Sagitario"
  },
  {
    nome: "Valete de Paus",
    significado: "Curiosidade, Descoberta, Entusiasmo, Mensagem",
    imagem: "imagens/arcanos-menores/paus/valetePaus.png",
    simNao: 80,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Mercurio",
    signo:"Sagitario"
  },
  {
    nome: "Cavaleiro de Paus",
    significado: "Aventura, Impulso, Movimento, Paixão",
    imagem: "imagens/arcanos-menores/paus/cavaleiroPaus.png",
    simNao: 85,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Marte",
    signo:"Sagitario"
  },
  {
    nome: "Rainha de Paus",
    significado: "Carisma, Confiança, Criatividade, Liderança",
    imagem: "imagens/arcanos-menores/paus/rainhaPaus.png",
    simNao: 90,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Sol",
    signo:"Leao"
  },
  {
    nome: "Rei de Paus",
    significado: "Visão, Autoridade, Inspiração, Realização",
    imagem: "imagens/arcanos-menores/paus/reiPaus.png",
    simNao: 95,
    tipo: "menor",
    elemento: "fogo",
    naipe: "paus",
    planeta:"Jupiter",
    signo:"Leao"
  },
  //COPAS
  {
  nome: "Ás de Copas",
  significado: "Amor, Emoção, Intuição, Novo sentimento",
  imagem: "imagens/arcanos-menores/copas/asCopas.png",
  simNao: 95,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Lua",
  signo: "Cancer"
},
{
  nome: "Dois de Copas",
  significado: "União, Parceria, Harmonia, Conexão",
  imagem: "imagens/arcanos-menores/copas/doisCopas.png",
  simNao: 100,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Vênus",
  signo: "Cancer"
},
{
  nome: "Três de Copas",
  significado: "Celebração, Amizade, Alegria, Compartilhamento",
  imagem: "imagens/arcanos-menores/copas/tresCopas.png",
  simNao: 95,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Mercúrio",
  signo: "Cancer"
},
{
  nome: "Quatro de Copas",
  significado: "Apatia, Reflexão, Insatisfação, Tédio",
  imagem: "imagens/arcanos-menores/copas/quatroCopas.png",
  simNao: 35,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Lua",
  signo: "Cancer"
},
{
  nome: "Cinco de Copas",
  significado: "Perda, Decepção, Luto, Arrependimento",
  imagem: "imagens/arcanos-menores/copas/cincoCopas.png",
  simNao: 20,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Marte",
  signo: "Escorpião"
},
{
  nome: "Seis de Copas",
  significado: "Nostalgia, Memórias, Inocência, Afeto",
  imagem: "imagens/arcanos-menores/copas/seisCopas.png",
  simNao: 75,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Sol",
  signo: "Escorpião"
},
{
  nome: "Sete de Copas",
  significado: "Fantasia, Escolhas, Ilusão, Possibilidades",
  imagem: "imagens/arcanos-menores/copas/seteCopas.png",
  simNao: 40,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Vênus",
  signo: "Escorpião"
},
{
  nome: "Oito de Copas",
  significado: "Desapego, Partida, Busca, Evolução",
  imagem: "imagens/arcanos-menores/copas/oitoCopas.png",
  simNao: 15,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Saturno",
  signo: "Peixes"
},
{
  nome: "Nove de Copas",
  significado: "Satisfação, Desejo, Felicidade, Realização",
  imagem: "imagens/arcanos-menores/copas/noveCopas.png",
  simNao: 100,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Júpiter",
  signo: "Peixes"
},
{
  nome: "Dez de Copas",
  significado: "Família, Plenitude, Amor, Harmonia",
  imagem: "imagens/arcanos-menores/copas/dezCopas.png",
  simNao: 100,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Marte",
  signo: "Peixes"
},
{
  nome: "Valete de Copas",
  significado: "Sensibilidade, Mensagem, Criatividade, Sonhos",
  imagem: "imagens/arcanos-menores/copas/valeteCopas.png",
  simNao: 80,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Mercúrio",
  signo: "Peixes"
},
{
  nome: "Cavaleiro de Copas",
  significado: "Romance, Convite, Idealismo, Encantamento",
  imagem: "imagens/arcanos-menores/copas/cavaleiroCopas.png",
  simNao: 90,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Vênus",
  signo: "Escorpião"
},
{
  nome: "Rainha de Copas",
  significado: "Empatia, Intuição, Compaixão, Profundidade",
  imagem: "imagens/arcanos-menores/copas/rainhaCopas.png",
  simNao: 90,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Lua",
  signo: "Cancer"
},
{
  nome: "Rei de Copas",
  significado: "Maturidade, Equilíbrio, Sabedoria, Controle Emocional",
  imagem: "imagens/arcanos-menores/copas/reiCopas.png",
  simNao: 90,
  tipo: "menor",
  elemento: "agua",
  naipe: "copas",
  planeta: "Netuno",
  signo: "Peixes"
},

//ESPADAS

{
  nome: "Ás de Espadas",
  significado: "Clareza, Verdade, Decisão, Revelação",
  imagem: "imagens/arcanos-menores/espadas/asEspadas.png",
  simNao: 85,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Mercúrio",
  signo: "Gêmeos"
},
{
  nome: "Dois de Espadas",
  significado: "Impasse, Escolha, Equilíbrio, Dúvida",
  imagem: "imagens/arcanos-menores/espadas/doisEspadas.png",
  simNao: 50,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Lua",
  signo: "Libra"
},
{
  nome: "Três de Espadas",
  significado: "Dor, Separação, Mágoa, Verdade Difícil",
  imagem: "imagens/arcanos-menores/espadas/tresEspadas.png",
  simNao: 5,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Saturno",
  signo: "Libra"
},
{
  nome: "Quatro de Espadas",
  significado: "Descanso, Recuperação, Pausa, Reflexão",
  imagem: "imagens/arcanos-menores/espadas/quatroEspadas.png",
  simNao: 25,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Júpiter",
  signo: "Libra"
},
{
  nome: "Cinco de Espadas",
  significado: "Conflito, Ego, Vitória Vazia, Tensão",
  imagem: "imagens/arcanos-menores/espadas/cincoEspadas.png",
  simNao: 15,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Vênus",
  signo: "Aquário"
},
{
  nome: "Seis de Espadas",
  significado: "Transição, Mudança, Superação, Movimento",
  imagem: "imagens/arcanos-menores/espadas/seisEspadas.png",
  simNao: 70,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Mercúrio",
  signo: "Aquário"
},
{
  nome: "Sete de Espadas",
  significado: "Estratégia, Engano, Sigilo, Astúcia",
  imagem: "imagens/arcanos-menores/espadas/seteEspadas.png",
  simNao: 20,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Lua",
  signo: "Aquário"
},
{
  nome: "Oito de Espadas",
  significado: "Limitação, Medo, Prisão Mental, Bloqueio",
  imagem: "imagens/arcanos-menores/espadas/oitoEspadas.png",
  simNao: 10,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Júpiter",
  signo: "Gêmeos"
},
{
  nome: "Nove de Espadas",
  significado: "Ansiedade, Culpa, Insônia, Sofrimento",
  imagem: "imagens/arcanos-menores/espadas/noveEspadas.png",
  simNao: 5,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Marte",
  signo: "Gêmeos"
},
{
  nome: "Dez de Espadas",
  significado: "Fim, Colapso, Encerramento, Ruína",
  imagem: "imagens/arcanos-menores/espadas/dezEspadas.png",
  simNao: 0,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Sol",
  signo: "Gêmeos"
},
{
  nome: "Valete de Espadas",
  significado: "Curiosidade, Observação, Informação, Vigilância",
  imagem: "imagens/arcanos-menores/espadas/valeteEspadas.png",
  simNao: 60,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Mercúrio",
  signo: "Gêmeos"
},
{
  nome: "Cavaleiro de Espadas",
  significado: "Ação, Rapidez, Coragem, Determinação",
  imagem: "imagens/arcanos-menores/espadas/cavaleiroEspadas.png",
  simNao: 75,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Marte",
  signo: "Aquário"
},
{
  nome: "Rainha de Espadas",
  significado: "Inteligência, Independência, Verdade, Objetividade",
  imagem: "imagens/arcanos-menores/espadas/rainhaEspadas.png",
  simNao: 70,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Vênus",
  signo: "Libra"
},
{
  nome: "Rei de Espadas",
  significado: "Autoridade, Lógica, Justiça, Estratégia",
  imagem: "imagens/arcanos-menores/espadas/reiEspadas.png",
  simNao: 80,
  tipo: "menor",
  elemento: "ar",
  naipe: "espadas",
  planeta: "Saturno",
  signo: "Aquário"
},

//OUROS

{
  nome: "Ás de Ouros",
  significado: "Oportunidade, Prosperidade, Manifestação, Abundância",
  imagem: "imagens/arcanos-menores/ouros/asOuros.png",
  simNao: 100,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Vênus",
  signo: "Touro"
},
{
  nome: "Dois de Ouros",
  significado: "Equilíbrio, Adaptação, Flexibilidade, Movimento",
  imagem: "imagens/arcanos-menores/ouros/doisOuros.png",
  simNao: 65,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Júpiter",
  signo: "Capricórnio"
},
{
  nome: "Três de Ouros",
  significado: "Trabalho, Cooperação, Construção, Competência",
  imagem: "imagens/arcanos-menores/ouros/tresOuros.png",
  simNao: 90,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Marte",
  signo: "Capricórnio"
},
{
  nome: "Quatro de Ouros",
  significado: "Segurança, Controle, Conservação, Estabilidade",
  imagem: "imagens/arcanos-menores/ouros/quatroOuros.png",
  simNao: 55,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Sol",
  signo: "Capricórnio"
},
{
  nome: "Cinco de Ouros",
  significado: "Escassez, Dificuldade, Perda, Necessidade",
  imagem: "imagens/arcanos-menores/ouros/cincoOuros.png",
  simNao: 10,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Mercúrio",
  signo: "Touro"
},
{
  nome: "Seis de Ouros",
  significado: "Generosidade, Troca, Apoio, Equilíbrio",
  imagem: "imagens/arcanos-menores/ouros/seisOuros.png",
  simNao: 85,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Lua",
  signo: "Touro"
},
{
  nome: "Sete de Ouros",
  significado: "Paciência, Colheita, Espera, Investimento",
  imagem: "imagens/arcanos-menores/ouros/seteOuros.png",
  simNao: 70,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Saturno",
  signo: "Touro"
},
{
  nome: "Oito de Ouros",
  significado: "Dedicação, Aprendizado, Aperfeiçoamento, Trabalho",
  imagem: "imagens/arcanos-menores/ouros/oitoOuros.png",
  simNao: 95,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Sol",
  signo: "Virgem"
},
{
  nome: "Nove de Ouros",
  significado: "Independência, Conquista, Prosperidade, Autonomia",
  imagem: "imagens/arcanos-menores/ouros/noveOuros.png",
  simNao: 100,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Vênus",
  signo: "Virgem"
},
{
  nome: "Dez de Ouros",
  significado: "Legado, Estabilidade, Família, Abundância",
  imagem: "imagens/arcanos-menores/ouros/dezOuros.png",
  simNao: 100,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Mercúrio",
  signo: "Virgem"
},
{
  nome: "Valete de Ouros",
  significado: "Estudo, Potencial, Oportunidade, Crescimento",
  imagem: "imagens/arcanos-menores/ouros/valeteOuros.png",
  simNao: 85,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Mercúrio",
  signo: "Virgem"
},
{
  nome: "Cavaleiro de Ouros",
  significado: "Persistência, Disciplina, Constância, Confiabilidade",
  imagem: "imagens/arcanos-menores/ouros/cavaleiroOuros.png",
  simNao: 80,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Saturno",
  signo: "Touro"
},
{
  nome: "Rainha de Ouros",
  significado: "Prosperidade, Cuidado, Segurança, Fertilidade",
  imagem: "imagens/arcanos-menores/ouros/rainhaOuros.png",
  simNao: 95,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Vênus",
  signo: "Capricórnio"
},
{
  nome: "Rei de Ouros",
  significado: "Sucesso, Liderança, Estabilidade, Riqueza",
  imagem: "imagens/arcanos-menores/ouros/reiOuros.png",
  simNao: 100,
  tipo: "menor",
  elemento: "terra",
  naipe: "ouros",
  planeta: "Júpiter",
  signo: "Touro"
},
];

const botao = document.getElementById("tirarCarta");
const nomeCarta = document.getElementById("nomeCarta");
const significadoCarta = document.getElementById("significadoCarta");
const perguntaInput = document.getElementById("pergunta");
const perguntaExibida = document.getElementById("perguntaExibida");
const imagemCarta = document.getElementById("imagemCarta");
const yesNo = document.getElementById("simNao");
const seletorDeck = document.getElementById("tipoDeck");

let numeroAnterior = null;

// MODO TESTE: mostra cada arcano menor uma vez, em sequência
let modoTesteMenores = false;
let cartasTesteMenores = [];

botao.addEventListener("click", function () {
  const pergunta = perguntaInput.value;
  const opcaoEscolhida = seletorDeck.value;

  let cartasDisponiveis;

  if (opcaoEscolhida === "todos") {
    cartasDisponiveis = cartas;
  } else if (opcaoEscolhida === "maior") {
    cartasDisponiveis = cartas.filter(function (carta) {
      return carta.tipo === "maior";
    });
  } else if (opcaoEscolhida === "menor") {
    cartasDisponiveis = cartas.filter(function (carta) {
      return carta.tipo === "menor";
    });
  }

  if (cartasDisponiveis.length === 0) {
    alert("Ainda não há cartas disponíveis para essa opção.");
    return;
  }

  let cartaSorteada;

  if (modoTesteMenores && opcaoEscolhida === "menor") {
    if (cartasTesteMenores.length === 0) {
      cartasTesteMenores = [...cartasDisponiveis];
    }

    cartaSorteada = cartasTesteMenores.shift();

    if (!cartaSorteada) {
      alert("Teste finalizado: todas as cartas menores foram exibidas.");
      return;
    }
  } else {
    let numeroAleatorio = Math.floor(Math.random() * cartasDisponiveis.length);

    while (numeroAleatorio === numeroAnterior) {
      numeroAleatorio = Math.floor(Math.random() * cartasDisponiveis.length);
    }

    numeroAnterior = numeroAleatorio;
    cartaSorteada = cartasDisponiveis[numeroAleatorio];
  }

  if (pergunta.trim() !== "") {
    perguntaExibida.textContent = "Pergunta: " + pergunta;
  } else {
    perguntaExibida.textContent = "";
  }

  nomeCarta.textContent = cartaSorteada.nome;
  significadoCarta.textContent = cartaSorteada.significado;
  yesNo.textContent = "Sim ou Não: " + cartaSorteada.simNao + " %";

  imagemCarta.src = cartaSorteada.imagem;
  imagemCarta.alt = cartaSorteada.nome;
  imagemCarta.style.display = "block";
});