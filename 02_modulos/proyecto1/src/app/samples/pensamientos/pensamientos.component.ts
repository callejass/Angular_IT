import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {

  pensamientos: Array<string>;
  pensamiento: string;
  insertar() {
    this.pensamientos.push(this.pensamiento);
    this.pensamiento = '';
  }

  constructor() { }

  ngOnInit() {
    this.pensamientos = [];
  }

}
