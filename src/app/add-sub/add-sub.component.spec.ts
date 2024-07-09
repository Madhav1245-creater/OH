import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubComponent } from './add-sub.component';

describe('AddSubComponent', () => {
  let component: AddSubComponent;
  let fixture: ComponentFixture<AddSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubComponent]
    });
    fixture = TestBed.createComponent(AddSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
