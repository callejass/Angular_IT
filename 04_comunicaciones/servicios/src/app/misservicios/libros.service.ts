import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
  aDatos: Array<string>;
  constructor() {
    this.aDatos = [
      'Html y css',
      'Angular para torpes',
      'AngularJS para torpes'
    ];
  }

  buscar(texto) {
    return this.aDatos;
  }

}
