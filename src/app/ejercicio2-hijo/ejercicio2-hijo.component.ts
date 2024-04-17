import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio2-hijo',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2-hijo.component.html',
  styleUrl: './ejercicio2-hijo.component.css'
})
export class Ejercicio2HijoComponent {
  productos = ["Leche", "Pan", "Café", "Azucar", "Huevos", "Platanos"];
  
  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();
  nombre:string='';

  enviarPadre(producto:string) {
    this.nombre=producto;
    this.llamadaPadre.emit(this.nombre);
  }
}
