
//TS
interface DatosLibro{
    tematica:string;
    paginas:number;
    capitulos:Array<string>
}
class Libro { 
    public autor:string;
    protected titulo:string;
    constructor(autor,titulo){
        this.autor=autor;
        this.titulo=titulo;
    }
}

//la clase Libro2 es igual que la clase Libro
class Libro2{
    
    constructor(public autor:string,public titulo:string){}
}

class LibroTecnico extends Libro implements DatosLibro{
    tematica;
    public paginas:number;
    public capitulos:Array<string>;
    //public capitulos:string[]; //equivalente a la definicion de arriba
    public precio:number;
    public calculaPrecio():(void);

    constructor(autor,titulo,tematica,paginas,precio){
        super(autor,titulo);
        this.tematica=tematica;
        this.paginas=paginas;
        this.capitulos=[];
        this.precio=precio;
    
    }

    a(pValor=1){
        this.precio*=pValor;
        console.log(this);
    }
}

let oLibro=new LibroTecnico("Yo","Mi primer libro","Angular",258,30);
oLibro.calculaPrecio(3);