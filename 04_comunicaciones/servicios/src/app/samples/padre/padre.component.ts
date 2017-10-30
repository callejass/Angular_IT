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
  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }
  // tslint:disable-next-line:one-line
  /* respuestaEvento(evento){
    this.nombre = evento;
  } */
  buscar() {
    this.aLibros = this.librosService.buscar(this.clave);
  }
}
