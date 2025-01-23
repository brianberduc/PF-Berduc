import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-alta-modificacion-alumno',
  templateUrl: './alta-modificacion-alumno.component.html',
  styleUrls: ['./alta-modificacion-alumno.component.scss']
})
export class AltaModificacionAlumnoComponent {

  @Output() agregarAlumno = new EventEmitter<Alumno>();
  public fb = inject(FormBuilder);
  public form: FormGroup = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]]
  });

  public guardar(valido: boolean, valor: Alumno) {
    if (valido) {
      this.agregarAlumno.emit(valor);
    }
  }
}
