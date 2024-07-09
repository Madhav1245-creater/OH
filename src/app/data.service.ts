import { Injectable } from '@angular/core';
import { AddSubComponent } from './add-sub/add-sub.component';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  managerId: number | null;
  imageUrl: string | null;
  email: string;
  subordinates: number[] | null;
  designation: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  mainData: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      managerId: null,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'john.doe@example.com',
      subordinates: [2, 3],
      designation: 'CEO',
    },
    {
      id: 2,
      name: 'Jane Smith',
      managerId: 1,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'jane.smith@example.com',
      subordinates: [4, 5],
      designation: 'CTO',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      managerId: 1,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'bob.johnson@example.com',
      subordinates: [6],
      designation: 'CFO',
    },
    {
      id: 4,
      name: 'Alice Brown',
      managerId: 2,

      imageUrl: 'https://via.placeholder.com/150',
      email: 'alice.brown@example.com',
      subordinates: [8, 9],
      designation: 'Engineering Manager',
    },
    {
      id: 5,
      name: 'Charlie White',
      managerId: 2,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'charlie.white@example.com',
      subordinates: [10, 11],
      designation: 'Product Manager',
    },
    {
      id: 6,
      name: 'David Black',
      managerId: 3,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'david.black@example.com',
      subordinates: [7],
      designation: 'Finance Manager',
    },
    {
      id: 7,
      name: 'Eva Green',
      managerId: 6,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'eva.green@example.com',
      subordinates: null,
      designation: 'Accountant',
    },
    {
      id: 8,
      name: 'Jonas',
      managerId: 4,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'jonas.green@example.com',
      subordinates: null,
      designation: 'Accountant',
    },
    {
      id: 9,
      name: 'Max',
      managerId: 4,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'max.green@example.com',
      subordinates: null,
      designation: 'Accountant',
    },
    {
      id: 10,
      name: 'Coco',
      managerId: 5,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'coco.green@example.com',
      subordinates: null,
      designation: 'Accountant',
    },
    {
      id: 11,
      name: 'Bruno',
      managerId: 5,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'bruno.green@example.com',
      subordinates: null,
      designation: 'Accountant',
    },
    // ... Add more employees as needed
  ];
  mainDataSubject: BehaviorSubject<Employee[]> = new BehaviorSubject<
    Employee[]
  >([]);
  mainData$: Observable<Employee[]> = this.mainDataSubject.asObservable();

  manager: Employee = this.mainData[0];
  managerSubject: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(
    this.manager
  );
  manager$: Observable<Employee> = this.managerSubject.asObservable();

  subs = this.mainData[0].subordinates;
  newSub: any = this.subs;
  managerIndex = 0;

  constructor(public dialog: MatDialog) {
    this.mainDataSubject.next(this.mainData);
  }

  onAdd(data: Employee) {
    this.mainData.push(data);
    this.mainDataSubject.next(this.mainData);
    console.log(this.mainData);
  }

  onChangeManager(email: string) {
    this.mainData.forEach((el, i) => {
      let id: any;
      if (el.email === email) {
        // id swap
        id = this.manager.id;
        this.mainData[0].id = el.id;
        this.mainData[i].id = id;

        // manager-Id swap
        id = this.manager.id;
        this.mainData[0].managerId = null;
        this.mainData[i].managerId = id;

        // name swap
        id = this.manager.name;
        this.mainData[0].name = el.name;
        this.mainData[i].name = id;

        // email swap
        id = this.manager.email;
        this.mainData[0].email = el.email;
        this.mainData[i].email = id;

        // designation swap
        id = this.manager.designation;
        this.mainData[0].designation = el.designation;
        this.mainData[i].designation = id;

        // img_url swap
        id = this.manager.imageUrl;
        this.mainData[0].imageUrl = el.imageUrl;
        this.mainData[i].imageUrl = id;

        console.log(this.mainData);
      }
    });
  }

  onDelete(id: number) {
    this.mainData.forEach((el, i) => {
      if (el.id === id) {
        this.mainData.splice(i, 1);
      }
    });
  }

  dialogRef: any;
  openDialog(data?: any, component?: any) {
    this.dialogRef = this.dialog.open(component, {
      data: data,
    });
  }
}
