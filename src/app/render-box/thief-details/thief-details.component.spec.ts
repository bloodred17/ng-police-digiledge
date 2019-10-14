import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiefDetailsComponent } from './thief-details.component';

describe('ThiefDetailsComponent', () => {
  let component: ThiefDetailsComponent;
  let fixture: ComponentFixture<ThiefDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiefDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiefDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
