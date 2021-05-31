import { Component, OnInit } from '@angular/core';
import { ApiNominaService } from '../services/api-nomina.service';
import { Response } from '../models/response.model';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MatDialog } from '@angular/material/dialog';
import { Empleado } from '../models/empleado.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../shared/delete/dialog-delete.component';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit {
  public lst: any[] = [];
  public columnas: string[] = ['rut', 'nombreCompleto', 'negocio', 'empresa', 'ceco', 'jefeDirecto', 'actions']
  readonly width: string = '300';

  constructor(
    private apiNomina: ApiNominaService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getNomina();
  }

  getNomina() {
    this.apiNomina.getNomina().subscribe(response => {
      this.lst = response.data;
    });
  }

  openAdd() {
    const dialogRef = this.dialog.open(EmpleadoComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.getNomina();
    });
  }

  openEdit(empleado: Empleado) {
    const dialogRef = this.dialog.open(EmpleadoComponent, {
      width: this.width,
      data: empleado
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.getNomina();
    });
  }

  delete(empleado: Empleado) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiNomina.delete(empleado.id).subscribe(response => {
          if (response.exito === 1) {
            this.snackBar.open(response.mensaje, "", {
              duration: 2000
            })
            //this.getNomina();
          }
        })
      }
    });
  }
}
