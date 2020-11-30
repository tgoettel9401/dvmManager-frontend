import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dvmManager-frontend';

  constructor(private dataService: DataService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  performShutdown(): void {
    this.dataService.performShutdown().subscribe();
  }

  openFileUploadDialog(fileTypeInput: string): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = fileTypeInput;

    this.dialog.open(FileUploadDialogComponent, dialogConfig);
  }

  checkAccounts(): void {
    this.dataService.checkAccounts().subscribe(
      data => this.snackBar.open(this.getInvalidAccountString(data)),
      err => this.snackBar.open(err)
    );
  }

  createChallenges(): void {
    this.dataService.createChallenges().subscribe();
  }

  private getInvalidAccountString(stringArray: string[]): string {
    let returnString = 'Invalid players: ';
    stringArray.forEach(element => {
      returnString = returnString.concat(element);
      returnString = returnString.concat(' / ');
    });
    return returnString;
  }

}
