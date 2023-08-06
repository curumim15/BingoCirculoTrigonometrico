//importe do express
var express = require('express');
var app = express();
var server = app.listen('3000');
app.use(express.static('public'));
//importe do socket.io
var io = require('socket.io')(server);
var Player = require("./Player");
var players = [];
const playersData = {};
var numero;
var problems = [];
var sorteador=false;
var modo;
var tempos = [];
var tries = {}


console.log("http://localhost:3000");
// chamar a função jogo Update
setInterval(jogoUpdate, 16);

// Função executada quando um connexão é estabelecida
io.sockets.on('connection', newConnection);
function newConnection(socket){
    console.log('new connection ' +  socket.id);
    socket.emit('playerId',socket.id);
    //recebe o nome do player eo seu id
  socket.on('playerName',Name);
  function Name(data){
    //Cria um novo "Player" com os dados recebidos
    players.push(new Player(data.id,data.name));
    tries[data.id] = {
      hits: 0,
      misses: 0,
      certas: [],
      erradas: []
    };
    console.log(players);
    console.log(tries);
    io.emit('recebeTries',tries)
  }

  socket.on('acerto',recebeAcerto);
  function recebeAcerto(data,coord,idx){
    var a = tries[data].hits;
    a++;
    tries[data].hits = a;
    tries[data].certas.push([coord,idx]);
    console.log(tries)
    io.emit('recebeTries',tries)
  }

  socket.on('erro',recebeErro);
  function recebeErro(data,coord,idx){
    var a = tries[data].misses;
    a++;
    tries[data].misses = a;
    tries[data].erradas.push([coord,idx]);
    io.emit('recebeTries',tries)
  }



  socket.on('getTries',getCertos);
  function getCertos(){
    io.emit('recebeTries', tries);
  }

  socket.on('modo',mode);
  function mode(data){
    modo = data;
    io.emit('modoServer',modo);
  }

  //recebe se existe sorteador ou nao
  socket.on('sorteador',sorteadorEstado);
  sorteador=false;
  function sorteadorEstado(data){
   // sorteador=false;
    sorteador=data;
    // emit o estado o player para o jogo

    //console.log(data);
  }

  //recebe a coordenada que saiu
    socket.on('emitBola',bola);
    function bola(data){
      numero=data;
    }

    socket.on('emitProblemas',problemas);
    function problemas(data){
      problems = data
    }

    socket.on('emitTempo',tempo);
    function tempo(data){
      tempos[0] = data[0]
      tempos[1] = data[1]
    }

    //recebe se alguem ganhou o jogo
    socket.on('emiteGanhou',ganhou);
    function ganhou(data){
      // emite ao jogo quem ganhou o jogo
      socket.broadcast.emit('ganhou',data);
      //console.log(data);
    }

    //função para quando existe um disconnect e atualiza o array de "Players"
    socket.on("disconnect", disconnect)
    function disconnect(){
      console.log("Client has disconnected: " + socket.id) ;
      players = players.filter(player => player.id !== socket.id);
    };
  }


  //função para atualizar o jogo
  // manda a coordenada recebida e os players que estao conectados
  function jogoUpdate(){
    if (modo == 'bingo'){
      io.emit('sorteadorEstado',sorteador);
      io.emit('recebeBola',numero);
      io.emit('players',players);
      io.emit('modoServer',modo);
    }else{
      io.emit('sorteadorEstado',sorteador);
      io.emit('recebeProblemas',problems)
      io.emit('recebeTries',tries);
      io.emit('players',players);
      io.emit('tempo',tempos);
      io.emit('modoServer',modo);
    }
  }




  
