class Circle {
    constructor() {
        this.coordenadas = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
        this.coordenadasT = [30, 45, 60, 300, 315, 330]
        this.clickedCoordinate = null; // Nova variável para guardar a coordenada guardada
        this.coord = [
            "(1,0)", "(√3/2,1/2)", "(√2/2,√2/2)",
            "(1/2,√3/2)", "(0,1)", "(-1/2,√3/2)",
            "(-√2/2,√2/2)", "(-√3/2,1/2)", "(-1,0)",
            "(-√3/2,-1/2)", "(-√2/2,-√2/2)", "(-1/2,-√3/2)",
            "(0,-1)", "(1/2,-√3/2,)", "(√2/2,-√2/2)",
            "(√3/2,-1/2)"];
        this.coordT = [   "(0,√3/3)", "(0,1*)","(0,√3)", 
                                "(0,-√3)", "(0,-1*)", "(0,-√3/3)"];
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

    //Função para criar o circulo trigonometrico no modo bingo
    DesenhaCircleBingo() {                                      // fazer procura nas coordanas normais e na tangente 
        stroke(255);                                            // Separar dentro dos for para conseguir colocar apenas as coordenadas de cada cartão
        let radius = 200;                                       // Saber se é tangente ou não
        let x, y;
        strokeWeight(2);
        fill(55, 50, 51);
        ellipse(width - 500, height / 2, radius * 2);
        strokeWeight(4);

        fill(255);
        line(width - 750, height / 2, width - 250, height / 2);
        line(width - 500, height / 2 - 250, width - 500, height / 2 + 250);
        line(width - 300, height / 2 - 350, width - 300, height / 2 + 350);

        strokeWeight(2);
        for (let i = 0; i < this.coordenadas.length; i++) {
            x = radius * cos(radians(this.coordenadas[i]));
            y = radius * -sin(radians(this.coordenadas[i]));

            fill(217, 217, 217);
            
            ellipse(x + width - 500, y + height / 2, 30, 30);
        }
        for (let i = 0; i < this.coordenadasT.length; i++) {
            x = radius * cos(radians(0));
            y = radius * -tan(radians(this.coordenadasT[i]));

        
            fill(217, 217, 217);
            
            ellipse(x + width - 500, y + height / 2, 30, 30);
        }

    }

    // Função apenas para desenhar o circulo no modo prova
    DesenhaCircleE() {
        stroke(255);
        let radius = 200;
        let x, y;
        strokeWeight(2);
        fill(55, 50, 51);
        ellipse(width - 500, height / 2, radius * 2);
        strokeWeight(4);

        fill(255);
        line(width - 750, height / 2, width - 250, height / 2);
        line(width - 500, height / 2 - 250, width - 500, height / 2 + 250);
        line(width - 300, height / 2 - 350, width - 300, height / 2 + 350);

        strokeWeight(2);
        for (let i = 0; i < this.coordenadas.length; i++) {
            x = radius * cos(radians(this.coordenadas[i]));
            y = radius * -sin(radians(this.coordenadas[i]));

            fill(217, 217, 217);
            
            ellipse(x + width - 500, y + height / 2, 30, 30);
        }
        for (let i = 0; i < this.coordenadasT.length; i++) {
            x = radius * cos(radians(0));
            y = radius * -tan(radians(this.coordenadasT[i]));

        
            fill(217, 217, 217);
            
            ellipse(x + width - 500, y + height / 2, 30, 30);
        }

    }

    // Função principal do modo prova e modo bingo para desenhar o circulo com as respetivas cores de certo e errado
    DesenhaCircle(certos, errados) {
        stroke(255);
        let radius = 200;
        let x, y;
        strokeWeight(2);
        fill(55, 50, 51);
        ellipse(width - 500, height / 2, radius * 2);
        strokeWeight(4);

        fill(255);
        line(width - 750, height / 2, width - 250, height / 2);
        line(width - 500, height / 2 - 250, width - 500, height / 2 + 250);
        line(width - 300, height / 2 - 350, width - 300, height / 2 + 350);

        strokeWeight(2);
        for (let i = 0; i < this.coordenadas.length; i++) {
            x = radius * cos(radians(this.coordenadas[i]));
            y = radius * -sin(radians(this.coordenadas[i]));
            fill(217, 217, 217);
            ellipse(x + width - 500, y + height / 2, 30, 30);
            //console.log(certos);
            for(let certo of certos){
                if(this.coord.includes(certo[0])){
                    if (this.coordenadaToAngle.get(certo[0]) === this.coordenadas[i]) {
                        fill(0, 255, 0); // Preenche com a cor verde
                        ellipse(x + width - 500, y + height / 2, 30, 30);
                        fill(0, 0, 0); // Preenche com a cor verde
                        text(certo[1], x + width - 500, y + height / 2); // Mostra o index de cada número certo
                        
                    }
                }
            }
            for(let errado of errados){
                if(this.coord.includes(errado[0])){
                    if (this.coordenadaToAngle.get(errado[0]) === this.coordenadas[i]) {
                        fill(255, 0, 0); // Preenche com a cor vermelha
                        ellipse(x + width - 500, y + height / 2, 30, 30);
                        fill(0, 0, 0); // Preenche com a cor vermelha
                        text(errado[1], x + width - 500, y + height / 2); // Mostra o index de cada número errado
                        
                    }

                }
            }  
        }
        for (let i = 0; i < this.coordenadasT.length; i++) {
            x = radius * cos(radians(0));
            y = radius * -tan(radians(this.coordenadasT[i]));
            fill(217, 217, 217);    
            ellipse(x + width - 500, y + height / 2, 30, 30);
            for(let certo of certos){
                if(this.coordT.includes(certo[0])){
                    if (this.coordenadaToAngle.get(certo[0]) === this.coordenadasT[i]) {
                        fill(0, 255, 0); // Preenche com a cor verde
                        ellipse(x + width - 500, y + height / 2, 30, 30);
                        fill(0, 0, 0); // Preenche com a cor verde
                        text(certo[1], x + width - 500, y + height / 2); // Mostra o index de cada número certo
                        
                    }
                }
            }
            for(let errado of errados){
                if(this.coordT.includes(errado[0])){
                    if (this.coordenadaToAngle.get(errado[0]) === this.coordenadasT[i]) {
                        fill(255, 0, 0); // Preenche com a cor vermelha
                        ellipse(x + width - 500, y + height / 2, 30, 30);
                        fill(0, 0, 0); // Preenche com a cor vermelha
                        text(errado[1], x + width - 500, y + height / 2); // Mostra o index de cada número errado
                        
                    }

                }
            }
        }

    }
}