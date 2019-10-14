import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveThievesComponent } from './remove-thieves.component';

describe('RemoveThievesComponent', () => {
  let component: RemoveThievesComponent;
  let fixture: ComponentFixture<RemoveThievesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveThievesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveThievesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
