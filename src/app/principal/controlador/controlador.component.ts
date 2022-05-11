import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styleUrls: ['./controlador.component.css']
})

export class ControladorComponent {

  colores = ['rojo', 'amarillo', 'verde'];

  colorSeleccionado: string = "rojo";
  @Output() emisor = new EventEmitter<string>();

  marcado: boolean = false;

  modificaSelect() {
    this.emisor.emit(this.colorSeleccionado);
  }

  apagado() {
    if (!this.marcado) {
      this.colorSeleccionado = "";
      this.emisor.emit(this.colorSeleccionado);
    }
  }
}