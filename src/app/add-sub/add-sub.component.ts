import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService, Employee } from '../data.service';

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.css'],
})
export class AddSubComponent implements OnInit {
  subForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddSubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private dataServie: DataService
  ) {
    console.log(this.data);
  }
  len = this.data.subordinates?.length;
  ngOnInit(): void {
    let id = this.dataServie.mainData[this.dataServie.mainData.length - 1].id;
    this.subForm = new FormGroup({
      id: new FormControl(id + 1),
      name: new FormControl(null, Validators.required),
      managerId: new FormControl(this.data.id),
      imageUrl: new FormControl(this.data.imageUrl),
      email: new FormControl(null, Validators.required),
      subordinates: new FormControl(null),
      designation: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.data.subordinates?.push(this.subForm.value.id);
    this.dataServie.newSub = this.data.subordinates;
    this.dataServie.onAdd(this.subForm.value);
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }
}
