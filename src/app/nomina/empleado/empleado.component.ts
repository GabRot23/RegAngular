import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Empleado } from "src/app/models/empleado.model";
import { ApiNominaService } from "src/app/services/api-nomina.service";

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
    public id?: number = 0;
    public nombres: string = "";
    public apellido: string = "";
    public rut: number = 0;
    public jefedirecto: string = "";
    public negocio: string = "";
    public empresa: string = "";
    public ceco: string = "";
    public cargo: string = "";
    public ubicacion: string = "";
    public estado: string = "";

    constructor(
        public dialogRef: MatDialogRef<EmpleadoComponent>,
        public apiNomina: ApiNominaService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public empleado: Empleado
    ) {
        if (this.empleado !== null) {
            this.id = empleado.id;
            this.rut = empleado.rut;
            this.nombres = empleado.nombres;
            this.apellido = empleado.apellido;
            this.jefedirecto = empleado.jefeDirecto;
            this.negocio = empleado.negocio;
            this.empresa = empleado.empresa;
            this.ceco = empleado.ceco;
            this.cargo = empleado.cargo;
            this.ubicacion = empleado.ubicacion;
            this.estado = empleado.estado;
        }
    }

    ngOnInit(): void {
    }

    close() {
        this.dialogRef.close();
    }

    editEmpleado() {
        const empleado: Empleado = {
            id: this.id,
            nombres: this.nombres,
            apellido: this.apellido,
            rut: Number(this.rut),
            jefeDirecto: this.jefedirecto,
            negocio: this.negocio,
            empresa: this.empresa,
            ceco: this.ceco,
            cargo: this.cargo,
            ubicacion: this.ubicacion,
            estado: this.estado
        }

        this.apiNomina.edit(empleado).subscribe(response => {
            if (response.exito == 1) {
                this.dialogRef.close();
                this.snackBar.open(response.mensaje, "", {
                    duration: 2000
                });
            }
        })
    }

    addEmpleado() {
        const empleado: Empleado = {
            nombres: this.nombres,
            apellido: this.apellido,
            rut: Number(this.rut),
            jefeDirecto: this.jefedirecto,
            negocio: this.negocio,
            empresa: this.empresa,
            ceco: this.ceco,
            cargo: this.cargo,
            ubicacion: this.ubicacion,
            estado: this.estado
        };

        this.apiNomina.add(empleado).subscribe(response => {
            if (response.exito == 1) {
                this.dialogRef.close();
                this.snackBar.open(response.mensaje, "", {
                    duration: 2000
                });
            }
        })
    }
}