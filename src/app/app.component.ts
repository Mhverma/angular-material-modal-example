import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-modal-demo';


  constructor(public matDialog: MatDialog) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
  }
}
