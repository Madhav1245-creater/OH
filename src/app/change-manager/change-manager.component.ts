import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService, Employee } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-manager',
  templateUrl: './change-manager.component.html',
  styleUrls: ['./change-manager.component.css'],
})
export class ChangeManagerComponent implements OnInit {
  changeForm!: FormGroup;
  mails: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<ChangeManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.changeForm = new FormGroup({
      email: new FormControl(null),
    });

    for (let index = 0; index < this.dataService.mainData.length; index++) {
      if (this.dataService.mainData[index].managerId !== null) {
        this.mails.push(this.dataService.mainData[index].email);
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onChange(email: string) {
    this.dataService.onChangeManager(email);
    this.onClose();
  }
}
