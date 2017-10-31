import { Http } from '@angular/http';
import { LibrosService } from './../../misservicios/libros.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public clave: string;
  public aLibros: Array<string>;
  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }
  // tslint:disable-next-line:one-line
  /* respuestaEvento(evento){
    this.nombre = evento;
  } */
  buscar() {
    this.librosService.buscar(this.clave).subscribe(

      (response) => {this.aLibros = response; },
      (error) => {console.log(error); }
    );

  }
}
