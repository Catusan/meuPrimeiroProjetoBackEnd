const express = require("express"); // aqui estou iniciando o express
const router = express.Router(); //qui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require("uuid"); //iniciando criador de id

const app = express(); //aqui estou iniciando o app
app.use(express.json());

const porta = 3333; //qui estou criando a porta

//aqui estou criando a lista inicial de mulheres
const mulheres = [
  {
    id: "1",
    nome: "Simara Conceição",
    imagem: "https://bit.ly/3LJIyOF",
    minibio: "Desenvolvedora e instrutora",
  },

  {
    id: "2",
    nome: "Iana Chan",
    imagem: "https://bit.ly/3JCXBqP",
    minibio: "CEO & Founder da PrograMaria",
  },

  {
    id: "3",
    nome: "Luana Pimentel",
    imagem: "https://bit.ly/3FKpFaz",
    minibio: "Senior Staff Software Engineer",
  },

  {
    id: "4",
    nome: "Caroline Tulio",
    imagem: "https://i.imgur.com/PZTOwiQ.png",
    minibio: "CRM Analyst e Desenvolvedora Web",
  },
];

//GET
function mostraMulheres(request, response) {
  response.json(mulheres);
}

//POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
  };

  mulheres.push(novaMulher);

  return response.json(mulheres);
}

//PORTA
function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/mulheres", mostraMulheres)); //configurei a rota GET /mulheres
app.use(router.post("/mulheres", criaMulher)); //configurei a rota POST /mulheres
app.listen(porta, mostraPorta); //servidor ouvindo a porta
