import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1PadreComponent } from './ejercicio1-padre/ejercicio1-padre.component';
import { Ejercicio2PadreComponent } from './ejercicio2-padre/ejercicio2-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio1PadreComponent, Ejercicio2PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril17Angular';
}
