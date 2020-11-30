import { HttpResponse } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  message = '';

  constructor(private dataService: DataService, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<FileUploadDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public fileType: any) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {

    this.currentFile = this.selectedFiles.item(0);
    this.dataService.uploadLst(this.fileType, this.currentFile).subscribe(
      event => {
        if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
        this.snackBar.open('Upload has been successful!', 'close');
      },
      err => {
        this.snackBar.open('Could not upload the file!', 'close');
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  }

  close(): void {
    this.dialogRef.close();
  }

}
