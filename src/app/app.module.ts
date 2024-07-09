import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayOrgComponent } from './display-org/display-org.component';
import { SubComponent } from './sub/sub.component';
import { ManagerComponent } from './manager/manager.component';
import { AddSubComponent } from './add-sub/add-sub.component';
import { ChangeManagerComponent } from './change-manager/change-manager.component';
import { DeleteSubComponent } from './delete-sub/delete-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOrgComponent,
    SubComponent,
    ManagerComponent,
    AddSubComponent,
    ChangeManagerComponent,
    DeleteSubComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
