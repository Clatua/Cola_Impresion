class Trabajo{
    constructor(ciclos){
        this.ciclos=ciclos;
        this.siguiente=null;
    }
}
class FIFO{
    constructor(){
        this.inicio=null;
    }
    agregar(nuevo){
        if(this.inicio==null){
            this.inicio=nuevo;
        }else{
            let temp=this.inicio;
            while(temp.siguiente!=null)
                temp=temp.siguiente;
            temp.siguiente=nuevo;
        }
    }
    extraer(){
        let temp=this.inicio;
        if(this.inicio!=null){
            this.inicio=this.inicio.siguiente;
            temp.siguiente=null;
        }
        return temp;
    }
    ver(){
        return this.inicio;
    }
}

let lista=new FIFO();

for(let i=1;i<=300;i++){
    let probabilidad=Math.random()*100+1
    if(probabilidad<=39){
        let nuevo=new Trabajo(Math.floor(Math.random()*11+4));
        lista.agregar(nuevo);
        console.log("El ciclo ",i," se creo un nuevo ",nuevo.ciclos);
    }
    if(lista.ver()!=null){
        lista.ver().ciclos--;
        console.log(lista.ver().ciclos)
        if(lista.ver().ciclos==0){
            console.log("El ciclo ",i," termino ");
            lista.extraer();
        }
    }
}