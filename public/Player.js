
class Player{
    constructor(player){
        this.id = player.id;
        this.name = player.name;
        this.card=[];
        this.cardProva = null;
        this.certos = null;
        this.errados = null;
        this.ballcard=null;
        this.professor = false;


    }


    //Função que cria um cartao com 5 coordenadas aleatorias
    CriarCard(coordenadas){
        while(this.card.length<5)
        {
            this.ballcard=random(coordenadas);
            if(this.card.includes(this.ballcard)){
            }else{
                this.card.push(this.ballcard);
            }
        }

    }

    //Função que cria um cartao com 5 coordenadas dos problemas iguais para todos
    CriarCardProva(coordenadas){
        for (let coord of coordenadas){
            this.card.push(coord)
        }
        

    }

    DesenhaTries(tries) {
        textSize(32);
        var index = 0;
        var acertos = tries[this.id].certas
        var erros = tries[this.id].erradas
        var x = 725;
        var y = 600;
        //text('ACERTOS', x, y);
        var i =1;
        for (let acerto of acertos) {
          index = index+50;
          text(i+' - '+acerto[0], x, y+index);
          i++;
        }
        x = 1025;
        y = 600;
        index = 0
        var j = 1
        //text('ERROS', x, y);
        for (let erro of erros) {
            index = index+50;
            text(j+' - '+erro[0], x, y+index);
            j++;
        }
    }

    DesenhaTriesFinal(tries) {
        textSize(32);
        var index = 0;
        var acertos = tries[this.id].certas
        var erros = tries[this.id].erradas
        var x = 725;
        var y = 600;
        //text('ACERTOS', x, y);
        var i =1;
        for (let acerto of acertos) {
          index = index+50;
          text(i+' - '+acerto[0], x, y+index);
          i++;
        }
        x = 1025;
        y = 600;
        index = 0
        var j = 1
        //text('ERROS', x, y);
        for (let erro of erros) {
            index = index+50;
            text(j+' - '+erro[0], x, y+index);
            j++;
        }
    }

    removeCoordenada(coordenada){

    }
}