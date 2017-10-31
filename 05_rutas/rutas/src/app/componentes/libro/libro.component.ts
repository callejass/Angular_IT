import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libroid: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.libroid = this.activatedRoute.snapshot.params['id'];
  }

  volver() {
    this.router.navigate(['catalogo']);
  }
}
