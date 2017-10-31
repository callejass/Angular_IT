import { Http } from '@angular/http';
import { LibrosService } from './../../misservicios/libros.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public clave: string;
  public aLibros: Array<string>;
  constructor(private librosService: LibrosService, private http: Http) { }

  ngOnInit() {
    this.aLibros = [];
  }
  // tslint:disable-next-line:one-line
  /* respuestaEvento(evento){
    this.nombre = evento;
  } */
  buscar() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + this.clave;
    this.http.get(url).subscribe(
      (response) => {
        console.log(response);
        const data = response.json();
        console.log(data);
        data.items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
       } ,
      (error ) => { console.log(error); }
    );
    // this.aLibros = this.librosService.buscar(this.clave);
  }
}
