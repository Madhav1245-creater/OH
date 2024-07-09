import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService, Employee } from '../data.service';
import { AddSubComponent } from '../add-sub/add-sub.component';
import { ChangeManagerComponent } from '../change-manager/change-manager.component';

@Component({
  selector: 'app-display-org',
  templateUrl: './display-org.component.html',
  styleUrls: ['./display-org.component.css'],
})
export class DisplayOrgComponent implements OnInit {
  manager!: Employee;

  constructor(private dataServie: DataService) {}

  ngOnInit(): void {
    this.dataServie.manager$.subscribe((res) => {
      this.manager = res;
    });
  }

  onAdd(sub: Employee) {
    this.dataServie.openDialog(sub, AddSubComponent);
    // this.dataServie.onAdd(sub);
  }

  onChangeManager(data?: any) {
    this.dataServie.openDialog(data, ChangeManagerComponent);
  }
}
