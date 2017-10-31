import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class LibrosService {
  aLibros: Array<string>;
  constructor(private http: Http) {
    this.aLibros = [];
  }

  /* buscar(clave) {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + clave;
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
  } */

  buscar(clave) {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + clave;
    return this.http.get(url).map(
      response => this.extractTitles(response)
    );
  }
  private extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title);
  }
}
