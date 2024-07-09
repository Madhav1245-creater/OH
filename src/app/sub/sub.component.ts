import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DataService, Employee } from '../data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddSubComponent } from '../add-sub/add-sub.component';
import { DeleteSubComponent } from '../delete-sub/delete-sub.component';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit, OnChanges {
  @ViewChild('active', { static: false }) activeCard!: ElementRef;
  sub!: Employee[];
  noOfSub = [this.dataService.subs];
  addedComponents: any[] = [];
  clicked: Array<number | null> = [];
  displaySubs: number[] = [];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog // public dialogRef: MatDialogRef<DeleteSubComponent>
  ) {}

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(changes?: SimpleChanges): void {
    this.dataService.mainData$.subscribe((data) => {
      this.sub = data;
      this.noOfSub[this.noOfSub.length - 1] = this.dataService.newSub;
      // this.noOfSub = [this.dataService.subs ? this.dataService.subs : []];
    });
  }

  displaySub(subs: any, i: number) {
    this.displaySubs = [];
    if (!subs) {
      return;
    }
    subs.forEach((ele: any, index: any) => {
      this.sub.forEach((el, i) => {
        if (el.id === ele) {
          this.displaySubs.push(i + 1);
        }
      });
    });

    if (this.noOfSub[i + 1] !== undefined) {
      if (this.noOfSub?.[i]?.[1] === this.clicked?.[2] || 0 - 1) {
        this.clicked = [];
      } else {
        this.clicked.splice(this.clicked.length - 2, 1);
      }
      this.noOfSub.splice(i + 1);
    }

    this.clicked.push(this.sub[this.displaySubs[0] - 1].managerId);
    this.sub.forEach((sub, i) => {
      if (this.sub[this.displaySubs[0] - 1].managerId === sub.id) {
        if (
          this.sub[this.sub.findIndex((el) => el.managerId === null)].id !==
          sub.managerId
        ) {
          this.clicked.push(sub.managerId);
        }
      }
    });
    if (this.displaySubs?.[0] !== this.noOfSub[this.noOfSub.length - 1]?.[0]) {
      this.noOfSub?.push([...this.displaySubs]);
    }
  }

  onAdd(sub: any) {
    this.dataService.openDialog(sub, AddSubComponent);
  }

  onDelete(id: number) {
    console.log(this.sub);
    let managerIndex: any = this.sub.findIndex(
      (el) => el.id === this.sub.find((el) => el.id === id)?.managerId
    );
    this.dataService.openDialog(id, DeleteSubComponent);
    this.dataService.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let ids: any = [];

        ids = this.dataService.mainData[managerIndex].subordinates?.filter(
          (el: any) => el !== id
        );
        this.dataService.mainData[managerIndex].subordinates = ids;
        this.noOfSub.splice(1);
        for (let index = this.clicked.length - 1; index >= 0; index--) {
          ids = [];
          const ele = this.clicked[index];
          let elIndex = this.dataService.mainData.findIndex((el) => {
            return el.id === ele;
          });
          ids = this.dataService.mainData[elIndex].subordinates;
          if (!this.noOfSub.includes(ids)) {
            this.noOfSub[this.noOfSub.length] = ids;
          }
        }

        JSON.parse(JSON.stringify(this.noOfSub)).forEach((el: any, i: any) => {
          this.displaySub(el, i);
        });
      }
      console.log(this.sub);
    });
  }
}
