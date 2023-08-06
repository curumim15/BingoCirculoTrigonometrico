class Sorteador {
    constructor() {
        this.coordenadasSorteio = [
            "(1,0)", "(√3/2,1/2)", "(√2/2,√2/2)",
            "(1/2,√3/2)", "(0,1)", "(-1/2,√3/2)",
            "(-√2/2,√2/2)", "(-√3/2,1/2)", "(-1,0)",
            "(-√3/2,-1/2)", "(-√2/2,-√2/2)", "(-1/2,-√3/2)",
            "(0,-1)", "(1/2,-√3/2,)", "(√2/2,-√2/2)",
            "(√3/2,-1/2)", "(0,√3/3)", "(0,1*)","(0,√3)", 
            "(0,-√3)", "(0,-1*)", "(0,-√3/3)"];
            this.coordenadas = [
                "(1,0)", "(√3/2,1/2)", "(√2/2,√2/2)",
                "(1/2,√3/2)", "(0,1)", "(-1/2,√3/2)",
                "(-√2/2,√2/2)", "(-√3/2,1/2)", "(-1,0)",
                "(-√3/2,-1/2)", "(-√2/2,-√2/2)", "(-1/2,-√3/2)",
                "(0,-1)", "(1/2,-√3/2,)", "(√2/2,-√2/2)",
                "(√3/2,-1/2)"];
            this.coordenadasT = [   "(0,√3/3)", "(0,1*)","(0,√3)", 
                                    "(0,-√3)", "(0,-1*)", "(0,-√3/3)"]
                this.coordenadasretiradas = [];
                this.coordenadasProva = [];
        this.players = new Map();
        this.coordenada = null;
        this.retirarCoordernada = false;

        this.coordenadaToAngle = new Map();
        this.coordenadaToAngle.set("(1,0)", 0);
        this.coordenadaToAngle.set("(√3/2,1/2)", 30);
        this.coordenadaToAngle.set("(√2/2,√2/2)", 45);
        this.coordenadaToAngle.set("(1/2,√3/2)", 60);
        this.coordenadaToAngle.set("(0,1)", 90);
        this.coordenadaToAngle.set("(-1/2,√3/2)", 120);
        this.coordenadaToAngle.set("(-√2/2,√2/2)", 135);
        this.coordenadaToAngle.set("(-√3/2,1/2)", 150);
        this.coordenadaToAngle.set("(-1,0)", 180);
        this.coordenadaToAngle.set("(-√3/2,-1/2)", 210);
        this.coordenadaToAngle.set("(-√2/2,-√2/2)", 225);
        this.coordenadaToAngle.set("(-1/2,-√3/2)", 240);
        this.coordenadaToAngle.set("(0,-1)", 270);
        this.coordenadaToAngle.set("(1/2,-√3/2,)", 300);
        this.coordenadaToAngle.set("(√2/2,-√2/2)", 315);
        this.coordenadaToAngle.set("(√3/2,-1/2)", 330);
        this.coordenadaToAngle.set("(0,√3/3)", 30);
        this.coordenadaToAngle.set("(0,1*)", 45);
        this.coordenadaToAngle.set("(0,√3)", 60);
        this.coordenadaToAngle.set("(0,-√3)", 300);
        this.coordenadaToAngle.set("(0,-1*)", 315);
        this.coordenadaToAngle.set("(0,-√3/3)", 330);

    }
    //função que retirar uma coordenada do array de coordenadas
    retiraCoordenada() {
        this.coordenada = random(this.coordenadasSorteio);
        this.coordenadasretiradas.push(this.coordenada);
        for (var i = 0; i < this.coordenadasSorteio.length; i++) {
            if (this.coordenadasSorteio[i] == this.coordenada) {
                this.coordenadasSorteio.splice(i, 1);
            }
        }
    }
    retiraCoordenadas(numProblemas){
        while (this.coordenadasProva.length < numProblemas){
            let randomCoordinate = random(this.coordenadasSorteio);
            this.coordenadasProva.push(randomCoordinate);
            this.coordenadasSorteio = this.coordenadasSorteio.filter(coordinate => coordinate !== randomCoordinate);
        }
    }
    
    //Desenha a coordenadas que ja sairam
    DesenhaCoordenadas() {
        if (this.coordenadasretiradas.length > 0) {
            for (var i = 0; i < this.coordenadasretiradas.length; i++) {
                var k = 125;
                var l;
                if (i > 10) {
                    k = 380;
                    l = 550 + (i - 11) * 45;
                } else {
                    l = 550 + i * 45;
                }
                textSize(32);
                fill(255, 255, 255);
                text(this.coordenadasretiradas[i], k, l);
            }
        }
    }
    //Desenha a coordenadas da Prova
    DesenhaCoordenadasProva() {
        if (this.coordenadasProva.length > 0) {
            for (var i = 0; i < this.coordenadasProva.length; i++) {
                var k = 125;
                var l;
                if (i > 10) {
                    k = 380;
                    l = 550 + (i - 11) * 45;
                } else {
                    l = 550 + i * 45;
                }
                textSize(32);
                fill(255, 255, 255);
                text(this.coordenadasProva[i], k, l);
            }
        }
    }
    //desenha os players no ecra
    DesenhaPlayersSorteador() {
        let index = 0;
        for (let player of this.players.values()) {
          let x = 0;
          let y;
          if (index > 15) {
            x = 230;
            y = 550 + (index - 16) * 45;
          } else {
            y = 550 + index * 45;
          }
          textSize(32);
          fill(255, 255, 255);
          text(player.name, 2025 + x, y);
          //console.log('count certos = '+player.certos)
          if(player.certos > 0)
            text(player.certos.length, 2025 + x, y+10);
          index++;
        }
      }

      //desenha os players no ecra
    DesenhaPlayers(tries) {
        let index = 0;
        for (let player of this.players.values()) {
          let x = 0;
          let y;
          if (index > 15) {
            x = 230;
            y = 550 + (index - 16) * 45;
          } else {
            y = 550 + index * 45;
          }
          textSize(32);
          fill(255, 255, 255);
          text(player.name, 2025 + x, y);
          if(tries != null)
            text(tries[player.id].hits, 2330 + x, y);
            text(tries[player.id].misses, 2460 + x, y);
          index++;
        }
    }
    
    DesenhaPlayersFinal(tries) {
      let index = 0;
      for (let player of this.players.values()) {
        let x = 0;
        let y;
        if (index > 15) {
          x = 230;
          y = 550 + (index - 16) * 45;
        } else {
          y = 550 + index * 45;
        }
        textSize(32);
        fill(255, 255, 255);
        text(player.name, 125 + x, y);
        if(tries != null)
          text(tries[player.id].hits, 500 + x, y);
          text(tries[player.id].misses, 600 + x, y);
        index++;
      }
    }


}