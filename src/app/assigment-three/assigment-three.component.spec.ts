import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentThreeComponent } from './assigment-three.component';

describe('AssigmentThreeComponent', () => {
  let component: AssigmentThreeComponent;
  let fixture: ComponentFixture<AssigmentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigmentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
