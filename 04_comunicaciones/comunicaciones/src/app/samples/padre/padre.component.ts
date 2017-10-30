import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public nombre: string;
  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:one-line
  respuestaEvento(evento){
    this.nombre = evento;
  }
}
