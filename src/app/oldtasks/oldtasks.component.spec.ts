import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldtasksComponent } from './oldtasks.component';

describe('OldtasksComponent', () => {
  let component: OldtasksComponent;
  let fixture: ComponentFixture<OldtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
