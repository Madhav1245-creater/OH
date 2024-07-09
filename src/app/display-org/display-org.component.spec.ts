import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOrgComponent } from './display-org.component';

describe('DisplayOrgComponent', () => {
  let component: DisplayOrgComponent;
  let fixture: ComponentFixture<DisplayOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayOrgComponent]
    });
    fixture = TestBed.createComponent(DisplayOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
