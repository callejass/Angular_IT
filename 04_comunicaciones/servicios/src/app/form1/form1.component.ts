
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; // para poder construir el observable
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

  public formGroup1: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

    ngOnInit() {
       this.formGroup1 = this.formBuilder.group(
         {
           titulo: ['', Validators.required],
           autor: ['', [Validators.required, Validators.minLength(4)]],
           editorial: [],
           fecha: ['2017']
         }
       );
    }
  avisarPrint() {
  }
  enviar() {
  }
  borrar() {
    this.formlocal.reset();
    console.log('Borrado');
  }


}
