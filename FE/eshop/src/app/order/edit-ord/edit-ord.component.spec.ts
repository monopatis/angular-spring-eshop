import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdComponent } from './edit-ord.component';

describe('EditOrdComponent', () => {
  let component: EditOrdComponent;
  let fixture: ComponentFixture<EditOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
