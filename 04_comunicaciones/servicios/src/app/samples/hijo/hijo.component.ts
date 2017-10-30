import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()  nombre: string;

  @Output() eventBorrar: EventEmitter<string>;

  nombrefavorito: string;
  constructor() {
    // la declaración del emisor de evento tiene que ir en el constructor y no en el ngOnInit para que funcione

    this.eventBorrar = new EventEmitter();
  }

  ngOnInit() {
    this.nombrefavorito = 'Sergio';

  }
  btnBorrar() {
    // this.nombre = '';
    this.eventBorrar.emit(this.nombrefavorito);
  }
}
