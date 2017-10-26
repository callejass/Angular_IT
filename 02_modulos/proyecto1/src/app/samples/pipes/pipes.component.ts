import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  sNombre: string;
  precio: number;
  fecha: Date;
  objeto;

  constructor() { }

  ngOnInit() {
    this.fecha = new Date(Date.now());
    this.sNombre = 'Pepe';
    this.precio = 12.94215;
    this.objeto = {
      nombre: 'Juan',
      apellidos: 'Martinez'
    };

  }


  borrar() {
    this.sNombre = '' ;
  }

}
