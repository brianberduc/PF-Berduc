import { Component } from '@angular/core';
import { Alumno } from './alumnos/interfaces/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alumnos: Alumno[] = [
    { nombre: 'Luis', apellido: 'Garcia', email: 'luis@u.com' },
    { nombre: 'Pedro', apellido: 'Jara', email: 'pedrojara@gmail.com' },
    { nombre: 'Luisa', apellido: 'Gomez', email: 'luisagomez@gmail.com' }
  ]

  public agregarAlumno(alumno: Alumno) {
    //Vamos alterar la referencia para que la detección de cambios lo muestre en la tabla
    this.alumnos = [...this.alumnos, alumno];
  };
}
