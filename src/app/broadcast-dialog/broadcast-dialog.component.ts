import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-broadcast-dialog',
  templateUrl: './broadcast-dialog.component.html',
  styleUrls: ['./broadcast-dialog.component.css']
})
export class BroadcastDialogComponent implements OnInit {

  constructor(private dataService: DataService,
              public dialogRef: MatDialogRef<BroadcastDialogComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  sendMessages(message: string, adminToken: string): void {
    this.dataService.sendBroadcastMessage(message, adminToken).subscribe(
      () => null,
      err => console.log(err)
    );
  }

}
