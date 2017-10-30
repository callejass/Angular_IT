import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pie',
    template: `<footer>
            <p>{{autor}} - {{empresa}}</p>
        </footer>`,
    styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit {
    autor: string;
    empresa: string;
    constructor() { }

    ngOnInit() {
        this.autor = 'Sergio Callejas';
        this.empresa = 'Grupo ICA';
    }
}
