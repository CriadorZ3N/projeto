import { QuizQuestion, Testimonial } from "./types";

export const PROVOCATIVE_TITLES = [
  "Você é o motor da empresa ou apenas o combustível que ela queima?",
  "O lucro é deles, mas o tempo que não volta é só seu.",
  "30 anos de dedicação ou 30 anos de vida entregues de bandeja?",
  "Seu crachá tem validade. Sua vida não deveria ter.",
  "Você está construindo o seu futuro ou apenas o patrimônio de outra pessoa?",
  "O sistema lucra com a sua exaustão. Até quando você vai financiar isso?",
  "O que sobra de você quando as luzes do escritório se apagam?",
  "Não deixe sua biografia ser escrita no rodapé de um contrato de trabalho.",
  "Você foi contratado para produzir, mas acabou sendo consumido.",
  "O \"colaborador do mês\" raramente é o dono da própria vida."
];

export const STORY_DATA = {
  headline: "Sua vida não cabe em oito horas diárias. E muito menos em trinta anos de espera.",
  subheadline: "Conhecemos a história: 33 anos dedicados à mesma cadeira, as mesmas metas, os mesmos prazos. No final, uma placa de agradecimento em acrílico barato e a percepção tardia de que a saúde ficou no caminho e a família cresceu sem você. Este não é um evento motivacional barato. É um choque de realidade para quem ainda tem tempo de mudar o final da própria história.",
  highlight: "33 anos na mesma empresa e no final a vida virou apenas trabalho.",
  fullText: "Eles chamam de 'carreira sólida'. Nós chamamos de 'erosão silenciosa'. Enquanto você se orgulha da sua resiliência, o sistema contabiliza sua energia como custo de produção. Você entregou suas melhores manhãs, abriu mão de ver seus filhos crescerem e engoliu o cansaço em nome de uma estabilidade que pode ser quebrada com um e-mail de demissão impessoal numa segunda-feira de manhã de sol. A pergunta que você precisa se fazer diante do espelho não é o quanto você ganha, mas o quanto de você está sendo vendido."
};

export const PROBLEM_CARDS = [
  {
    id: "saude",
    title: "Saúde Roubada",
    subtitle: "A Erosão Silenciosa",
    description: "Insônia crônica travestida de 'dedicação', picos de cortisol batizados de 'foco sob pressão' e calmantes na gaveta da mesa de trabalho. O corpo cobra a conta do que a mente finge suportar.",
    metric: "72% dos executivos relatam burnout ativo.",
    impact: "Você está trocando saúde física por metas que serão atualizadas no próximo mês."
  },
  {
    id: "tempo",
    title: "Tempo Irrecuperável",
    subtitle: "A Taxa de Câmbio Desigual",
    description: "Você vende 44 horas semanais sob contrato, mas entrega 60 na prática. Qual a cotação financeira de uma infância de um filho perdida, um almoço de domingo cancelado ou a sua própria juventude?",
    metric: "4.800 horas de trabalho a cada 2 anos.",
    impact: "O dinheiro acumula e desvaloriza; o tempo apenas se extingue."
  },
  {
    id: "identidade",
    title: "Identidade Dissolvida",
    subtitle: "O Homem no Crachá",
    description: "Quando pedem para você se descrever, a primeira resposta é o seu cargo. O sistema te treina para acreditar que sem aquela logomarca no peito e aquela assinatura de e-mail corporativo, você é um ninguém.",
    metric: "90% das pessoas definem-se pelo cargo.",
    impact: "O crachá tem prazo de validade. Quem você será no dia seguinte à sua demissão?"
  }
];

export const IDENTIFICATION_LIST = [
  "Para quem sente que a segunda-feira é um fardo insuportável e a sexta-feira é uma fuga desesperada.",
  "Para quem percebeu que o pretenso sucesso profissional está custando a sanidade mental e a presença em casa.",
  "Para quem olha para o lado e vê colegas de 20 anos de casa que parecem ter 'secado' por dentro, sem brilho no olhar.",
  "Para você, que sabe no fundo da alma que tem mais talento, propósito e inteligência do que o seu cargo atual permite exercer."
];

export const EVENT_PROMISE = {
  title: "O Despertar da Consciência Profissional",
  subtitle: "Onde termina o funcionário e onde começa o ser humano?",
  text: "Neste evento ao vivo, vamos romper a lógica da exploração silenciosa e do cansaço crônico. Não vamos te ensinar clichês corporativos para trabalhar mais ou gerir melhor o stress; vamos te ensinar a retomar as rédeas sobre o seu bem mais precioso e não renovável: o seu tempo. Prepare-se para uma reprogramação drástica de mentalidade sobre trabalho, valor, identidade e liberdade profissional.",
  details: [
    { label: "Data", value: "Quinta-feira, 09 de Julho de 2026" },
    { label: "Horário", value: "20:00 (Horário de Brasília)" },
    { label: "Formato", value: "Transmissão Exclusiva (Online e Gratuita)" },
    { label: "Acesso", value: "Apenas para inscritos confirmados" }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Roberto Fontes",
    age: 46,
    formerJob: "Diretor Regional de Operações (18 anos de multinacional)",
    currentStatus: "Fundador de Consultoria de Eficiência & Pai Presente",
    quote: "Eu acreditava que era insubstituível. Tive um princípio de infarto no escritório. Duas semanas depois de voltar da licença médica, me demitiram para 'cortar custos'. Foi a melhor violência que já sofri. Acordei.",
    avatarSeed: "roberto"
  },
  {
    id: 2,
    name: "Juliana Mendes",
    age: 34,
    formerJob: "Gerente Sênior de Marketing",
    currentStatus: "Profissional Autônoma & Designer Nômade",
    quote: "Trabalhava 12h por dia cuidando do crescimento da marca de outra pessoa enquanto minha filha dava os primeiros passos com a babá. O 'Despertar' me deu a coragem de refazer o cálculo da minha vida.",
    avatarSeed: "juliana"
  },
  {
    id: 3,
    name: "Arthur de Souza",
    age: 51,
    formerJob: "Analista de Sistemas Principal (33 anos de carreira)",
    currentStatus: "Produtor Rural Orgânico & Consultor de Software Livre",
    quote: "Quando me aposentei, ganhei uma placa dourada com meu nome. Olhei para aquela placa e percebi que ela custou meus joelhos, meu primeiro casamento e 30 anos de pores do sol que não vi. Não espere a placa para acordar.",
    avatarSeed: "arthur"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Como está sua rotina de sono e desconexão do trabalho?",
    subtitle: "A mente que nunca desliga consome a própria energia.",
    options: [
      { text: "Durmo bem e não checo mensagens profissionais após o expediente.", points: 1, description: "Desconexão saudável." },
      { text: "Checo o celular antes de dormir e às vezes acordo pensando em prazos.", points: 2, description: "Sinais de alerta de hipervigilância." },
      { text: "Acordo cansado, durmo mal e respondo e-mails de madrugada rotineiramente.", points: 4, description: "Sobrecarga crítica. Sistema simpático travado no modo 'perigo'." }
    ]
  },
  {
    id: 2,
    question: "Nas refeições ou momentos importantes com sua família, onde está sua cabeça?",
    subtitle: "A ausência física é triste, mas a ausência mental é uma mentira dolorosa.",
    options: [
      { text: "Totalmente presente, focado nas pessoas à mesa.", points: 1, description: "Consciência de presença." },
      { text: "Fisicamente presente, mas com o celular do lado brilhando com notificações.", points: 2, description: "Atenção fragmentada e dispersão constante." },
      { text: "Ausente. Mesmo quando estou lá, fico pensando no problema da empresa ou irritado.", points: 4, description: "Saturação emocional. O trabalho sequestrou sua disponibilidade afetiva." }
    ]
  },
  {
    id: 3,
    question: "O cansaço que você sente no momento é recarregado por um fim de semana comum?",
    subtitle: "Diferenciar cansaço físico temporário de exaustão existencial.",
    options: [
      { text: "Sim, durmo um pouco mais e me sinto 100% renovado na segunda-feira.", points: 1, description: "Fisiologia normal do repouso." },
      { text: "Não totalmente. Domingo à noite sinto uma angústia profunda no estômago.", points: 2, description: "Ansiedade antecipatória clássica ('Síndrome do Fantástico')." },
      { text: "De forma alguma. Acordo exaurido mesmo após férias de 15 dias. Sinto apatia.", points: 4, description: "Erosão vital. O descanso biológico comum já não repara o esgotamento existencial." }
    ]
  },
  {
    id: 4,
    question: "Se a empresa extinguir seu cargo amanhã, quem resta no espelho?",
    subtitle: "O crachá é uma casca emprestada, não uma identidade.",
    options: [
      { text: "Uma pessoa livre, com habilidades claras e orgulho de quem é fora do cargo.", points: 1, description: "Identidade integrada." },
      { text: "Alguém assustado, que teria receio sobre o mercado de trabalho e o que falar pros outros.", points: 2, description: "Dependência de aprovação externa e status." },
      { text: "Um vazio imenso. Sinto que sem meu cargo atual eu não tenho valor nem rumo.", points: 4, description: "Simbiose corporativa total. A casca engoliu a essência." }
    ]
  }
];
