import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Pipe({
  name: 'nomyape'
})
export class NomyapePipe implements PipeTransform {

  transform(alumno: Alumno): string {
    return alumno ? `${alumno.nombre} ${alumno.apellido}` : '';
  }

}
