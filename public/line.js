class Linha{
    constructor(x,y,x2,y2){
        this.x=x;
        this.y=y;
        this.x2=x2;
        this.y2=y2;
    }
    display(){
        line(this.x,this.y,this.x2,this.y2);
    }
}