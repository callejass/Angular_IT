
//ES6
class Libro { 
    constructor(autor,titulo){
        this.autor=autor;
        this.titulo=titulo;
    }
}

class LibroTecnico extends Libro{
    constructor(autor,titulo,tematica,paginas,precio){
        super(autor,titulo);
        this.tematica=tematica;
        this.paginas=paginas;
        this.capitulos=[];
        this.precio=precio;
    
    }
    preciofinal(pValor=1){
        this.precio*=pValor;
        console.log(this);
    }
}

oLibro=new LibroTecnico("Yo","Mi primer libro","Angular",258,30);
oLibro.preciofinal(3);