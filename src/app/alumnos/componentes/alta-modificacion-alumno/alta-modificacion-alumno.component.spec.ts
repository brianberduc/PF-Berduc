import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaModificacionAlumnoComponent } from './alta-modificacion-alumno.component';

describe('AltaModificacionAlumnoComponent', () => {
  let component: AltaModificacionAlumnoComponent;
  let fixture: ComponentFixture<AltaModificacionAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaModificacionAlumnoComponent]
    });
    fixture = TestBed.createComponent(AltaModificacionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
