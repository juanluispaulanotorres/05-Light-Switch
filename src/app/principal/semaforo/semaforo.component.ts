import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})

export class SemaforoComponent implements OnInit {

  @Input() colorSeleccionado!: string

  constructor() {}

  ngOnInit(): void {
  }
  
}
