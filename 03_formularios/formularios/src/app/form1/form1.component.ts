
import { Component, OnInit, ViewChild } from '@angular/core';

// tslint:disable-next-line:one-line
interface Usuario {
  firstname: string;
  lastname: string;
  phoneNumber: string;
}
interface Departamento {
  nombre: string;
  codigo: string | number;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

@ViewChild('myform')
  formlocal: any;

  user: Usuario;
  impresoras: Array<string>;
  impresoraSeleccionada: string;
  departamentos: Array<Departamento>;
  departamentoSeleccionado: Departamento;
  isClaro: boolean;
  isColor: boolean;

  avisarPrint() {
    alert('adf');
  }
  enviar() {
    alert('Enviando...');
    console.log('Enviado');
    console.log(this.formlocal);
  }
  borrar() {
    this.formlocal.reset();
    console.log('Borrado');
  }
  constructor() { }

  ngOnInit() {
     this.user = {firstname: '', lastname: '', phoneNumber: '' };
     this.impresoras = ['HP', 'Canon', 'Epson'];
     this.departamentos = [];
     this.departamentos.push({codigo : '01', nombre : 'Contabilidad'});
     this.departamentos.push({codigo : '02', nombre : 'Marketing'});
     this.departamentos.push({codigo : '03', nombre : 'Desarrollo'});
     this.departamentos.push({codigo : '04', nombre : 'Ventas'});
     this.impresoraSeleccionada = '';
  }

}
