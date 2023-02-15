//Tewt write when the page was load
var currentdate = new Date();
run = [
  '<span class="indice">Run </span><span class="colored">FilipeClementePortefolio.sh</span>',
  '<span class="indice">[' +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds() +
    "]</span>",
  "┌=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-┐",
  "|    ______              _           __  ___           __  ___     ___       |",
  "¦   /_  __/__ ______ _  (_)__  ___ _/ / / _ \\___  ____/ /_/ _/__  / (_)__    ¦",
  "|    / / / -_) __/  \\ \\/ / _ \\/ _ `/ / / ___/ _ \\/ __/ __/ _/ _ \\/ / / _ \\   |",
  "¦   /_/  \\__/_/ /_/_/_/_/_//_/\\_,_/_/ /_/   \\___/_/  \\__/_/ \\___/_/_/\\___/   ¦",
  '|                                                                  <span class="indice">[1.01]</span>    |',
  "└=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-┘",
  'Bem vindo ao meu <span class="colored">portfolio<span>',
  "Para começar use o comando <span class=\"command\">'help'<span>"
];

//password
var password = "Password";

// Text for the command 'Help'
help = [
  "<br>",
  '<span class="command">about</span>          Ler sobre mim',
  '<span class="command">works</span>          Mostrar alguns dos meus trabalhos',
  '<span class="command">social</span>         Mostrar redes sociais',
  '<span class="command">contact</span>        Obter o meu email',
  //'<span class="command">credits</span>        Ver créditos de agrsdecimentos',
  '<span class="command">secret</span>         z?◙░▓_da~▒_*? <span class="indice">[' +password + "]<span>",
  "<br>"
];

// email
var email =
  '<a href="mailto:me@filipeclemente.pt">me@filipeclemente.pt</a>';

// Link to MyWebSite
var MyWebSite = "https://filipeclemente.pt/";
// Text for the command 'about'
about = [
  "<br>",
  "Olá, meu nome é <b>Filipe Clemente</b> e sou um Desenvolvedor Web Full Stack.",
  "Tenho vasta experiência em trabalhar com várias tecnologias, como <b>Laravel</b>, <b>Lumen</b>, <b>ReactJS</b>, <b>React Native</b> e outras.",
  "Tenho trabalhado como desenvolvedor web há mais de <b>3 anos</b>, tendo trabalhado com diversos clientes e projetos. ",
  "Durante esse período, desenvolvi vários projetos e aplicações web usando as tecnologias mencionadas acima.",
  "Estou sempre à procura de novos desafios e projetos para trabalhar,",
  "pois é isso que me motiva a continuar como desenvolvedor web.",
  "Estou comprometido em produzir produtos de qualidade e satisfazer os requisitos de cada projeto. ",
  "Além disso, trabalho com a mais alta ética profissional e atenção aos detalhes.",
  "<br>"
];

//link social
var github = "https://github.com/fdc2001";
var linkedin = "https://www.linkedin.com/in/filipe-clemente";
var twitter = "#";
var instagram = "#";

//social
social = [
  "<br>",
  'github         <a href="' + github + '" target="_blank">' + github + "</a>",
  'linkedin       <a href="' + linkedin + '" target="_blank">' + linkedin + "</a>",
  "<br>"
];


//credits
credits = [
  "<br>",
  '<span class="margin">Developement By <a href="' + MyWebSite + '" target="_blank">Filipe Clemente</a>, fullstack developer</span>',
  '<span class="margin">Thanks to <a href="http://maximefreund.com/" target="_blank">Maxime Freund</a> for their help</span>',
  '<span class="margin">Thanks to <a href="https://www.valentinsld.fr" target="_blank">Valentin SALAUD</a></span>',
  '<span class="margin">Thanks to shachi for the script caret.js</span>',
  '<span class="margin">Thanks to taye for the script <a href="https://interactjs.io/" target="_blank">interact.js</a> on Github</span>',
  "<br>"
];

//secret
secret = [
  "<br>",
  '<span class="command">historic</span>       Ver historico de comandos',
  '<span class="command">color</span>          Introduza a cor com um número 0 a 8 para alterar a apresentação do terminal',
  '<span class="command">clear</span>          Limpar ecrã',
  '<span class="command">shutdown</span>       Desligar o sistema',
  '<span class="command">ping</span>',
  "<br>"
];


//audio
var start = new Audio('sounds/start.mp4');
var closeFrame = new Audio('sounds/CloseWindows.wav');
var openFrame = new Audio('sounds/OpenWindow.wav');
var wrongCommand = new Audio('sounds/WrongCommand.wav');
var passwordEnter = new Audio('sounds/Password.wav');
var wrongPassword = new Audio('sounds/WrongPassword.wav');
var goodPassword = new Audio('sounds/GoodPassword.wav');
var closeS = new Audio('sounds/end.mp4');
var type1 = new Audio('sounds/type1.wav');
var type2 = new Audio('sounds/type2.wav');
var type3 = new Audio('sounds/type3.wav');
var type4 = new Audio('sounds/type4.wav');
var type5 = new Audio('sounds/type5.wav');
