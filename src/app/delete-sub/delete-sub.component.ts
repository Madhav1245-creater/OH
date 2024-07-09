import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService, Employee } from '../data.service';

@Component({
  selector: 'app-delete-sub',
  templateUrl: './delete-sub.component.html',
  styleUrls: ['./delete-sub.component.css'],
})
export class DeleteSubComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) {}

  onDelete() {
    this.dataService.onDelete(this.data);
    this.onClose(true);
  }

  onClose(value: boolean) {
    this.dialogRef.close(value);
  }
}
