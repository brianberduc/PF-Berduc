//Modulos de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { TablaAlumnoComponent } from './alumnos/componentes/tabla-alumno/tabla-alumno.component';
import { AltaModificacionAlumnoComponent } from './alumnos/componentes/alta-modificacion-alumno/alta-modificacion-alumno.component';

//Pipes
import { NomyapePipe } from './alumnos/pipes/nomyape.pipe';

//Directivas
import { Font20Directive } from './alumnos/directivas/font-20.directive';

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ListaAlumnosComponent,
    TablaAlumnoComponent,
    AltaModificacionAlumnoComponent,
    NomyapePipe,
    Font20Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
