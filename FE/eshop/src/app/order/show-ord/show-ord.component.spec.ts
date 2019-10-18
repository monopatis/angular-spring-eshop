import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdComponent } from './show-ord.component';

describe('ShowOrdComponent', () => {
  let component: ShowOrdComponent;
  let fixture: ComponentFixture<ShowOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
