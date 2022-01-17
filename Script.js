const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');
const nomeDoPersonagem1 = document.querySelector('#nomePersonagem');
const especie1 = document.querySelector('#especiePersonagem');
const condicao1 = document.querySelector('#statusPersonagem');
const nomeDoPersonagem2 = document.querySelector('#nomeFigura');
const especie2 = document.querySelector('#especieFigura');
const condicao2 = document.querySelector('#statusFigura');

traduzirCondicao = (data) => {
if(data.status == 'unknown'){
return 'Não sabemos';}
else if(data.status == 'Alive'){
return 'Sim';}
else {
return 'Não. Está morto';}}

traduzirCondicao = (data) => {
if(data.status == 'unknown'){
return 'Não sabemos';}
else if(data.status == 'Alive'){
return 'Sim';}
else {
return 'Não. Está morto';}}


gerarValorAleatorio = () => {
return Math.floor(Math.random() * 671);}

pegarPersonagem = () => {
let numeroAleatorio = gerarValorAleatorio();
return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
method:'GET',
headers: {
Accept: 'application/json',
"Content-type": 'application/json'}}
).then((response) => response.json()).then((data) => {
imagem.src = data.image;
imagem.alt = data.name;
nomeDoPersonagem.innerHTML = data.name;
especie.innerHTML = data.species;
condicao.innerHTML = traduzirCondicao(data);});}

botao.onclick = pegarPersonagem;