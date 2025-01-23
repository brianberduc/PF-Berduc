import { Component, Input } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.scss']
})
export class TablaAlumnoComponent {
  public columnas = ['nomyape', 'email'];
  @Input({required: true}) alumnos: Alumno[] = [];
}
