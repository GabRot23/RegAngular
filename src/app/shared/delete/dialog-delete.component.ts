import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-delete',
    templateUrl: './dialog-delete.component.html'
})
export class DialogDeleteComponent {

    constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) { }

}