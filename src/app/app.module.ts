import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'; // para agregar la barra de navegación lateral
import { MatDialogModule } from '@angular/material/dialog'; // para que aparezan cuadros de diálogo
import { MatButtonModule } from '@angular/material/button'; // para botones
import { MatInputModule } from '@angular/material/input'; // para formularios
import { MatSnackBarModule } from '@angular/material/snack-bar'; // agrega una barra de mensaje temporal
import { MatCardModule } from '@Angular/material/card'; // para agregar tarjetas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NominaComponent } from './nomina/nomina.component';
import { MatTableModule } from '@angular/material/table';
import { EmpleadoComponent } from './nomina/empleado/empleado.component';
import { DialogDeleteComponent } from './shared/delete/dialog-delete.component';
import { AuthComponent } from './auth/auth.component';
import { JwtInterceptor } from './auth/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    NominaComponent,
    EmpleadoComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
