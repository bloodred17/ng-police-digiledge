import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThiefComponent } from './add-thief.component';

describe('AddThiefComponent', () => {
  let component: AddThiefComponent;
  let fixture: ComponentFixture<AddThiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
