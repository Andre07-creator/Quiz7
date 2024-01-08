//Este array com objetos alimenta o template das perguntas, assim não precisando criar
//novas telas e sim mudando sempre a mesma tela dinamicamente atráves do 
//javascript
let answers = [
  {
    question: "De quem é a famosa frase “Penso, logo existo”?",
    options: [
      "a) Platão",
      "b) Galileu Galilei",
      "c) Descartes",
      "d) Sócrates",
      
    ],
    correct: "c",
  },
  {
    question: "Quantas casas decimais tem o número pi?",
    options: [
      "a) Duas",
      "b) Centenas",
      "c) Infinitas",
      "d) Vinte",
      
    ],
    correct: "c",
  },
  {
    question: "To sem ideia já?",
    options: [
      "a) legal",
      "b) Bacana",
      "c) Interessante",
      "d) Rapaz...",
    
    ],
    correct: "d",
  },
];

const h3Question = document.getElementById("text-question");
//Pega todas as labels e coloca em um tipo de array
const optionLabels = document.querySelectorAll("label");
const submit = document.getElementById("submit");
//Controla array, sendo mudado por uma incrementação de acordo que for
//pulando para as próximas perguntas
let currentQuestion = 0;
//Registra a pontução de quantas perguntas o usuário acertou
let score = 0;
//let respostas = [];

//Função que carrega as perguntas na pagina
function loadQuestion() {
//
  h3Question.innerText = `${currentQuestion + 1}. ${
    answers[currentQuestion].question
  }`;
  //Itera passando por todos os labels 
  optionLabels.forEach((label, index) => {
    //Itera sobre o array de options da lista answer, utilizando o currentQuestion
    //para pegar a pergunta principal e atraves do index do foreach injetar
    //o array de perguntas em cada label contida no html que foi salva na
    // em optionLabels
    label.textContent = answers[currentQuestion].options[index];
  });
}
//Mostra o resultado final do quiz
function showResult() {
  const result = document.getElementById("result");
  //Retira todos os elementos de perguntas da tela com o display none
  h3Question.style.display = "none";
  //Atraves da ul é retirada todas as labels de uma vez
  document.getElementById("list-questions").style.display = "none";
  submit.style.display = "none";
  //criação dos elementos do resultado final
  const pResult = document.createElement("h3");
  //Essa tag a serve para colocar em volta do botão, voltar, assim
  //retornando para a tela inicial
  const aResult = document.createElement("a");
  aResult.href = "../index.html";
  const buttonResult = document.createElement("button");
  buttonResult.innerText = "Voltar";
  aResult.appendChild(buttonResult);
  //Atraves do score e o lenght do array answer é mostrado a quantidade de acertos
  //do usuário em comparação com o número de perguntas
  pResult.innerText = `Voce acertou ${score} perguntas de ${answers.length}`;
  result.append(pResult, aResult);
}
//Permite ir para a próxima questão
function next() {
  //pega a questão selecionada pelo o usuário do botão radio
  const selectedOption = document.querySelector([
    'input[name="question"]:checked',
  ]);
  //Testa se o usuário selecionou alguma opção, não tendo selecionado
  //o programa não vai passar para a próxima pergunta
  if (!selectedOption) {
    return;
  }
  //Verifica se o usuário acertou a questão e soma um ponto na variavel
  //score para ele
  if (selectedOption.value === answers[currentQuestion].correct) {
    score++;
  }
  //incrementa mais um na variavel currentQuestion para que ela possa ir
  //adiante no array indo para a próxima pergunta
  currentQuestion++;
  //Verifica se o currentQuestion é maior que o tamanho do array answer, não sendo
  //o programa vai carregar a pergunta seguinte
  if (currentQuestion < answers.length) {
    loadQuestion();
  //O array sendo menor será mostrado o resultado final com a pontuação do
  //usuário
  } else {
    showResult();
  }
}
//Botão principal que muda de questões
submit.addEventListener("click", next);
//funçã principal que vai carregar as perguntas
loadQuestion();
