import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorOrdItemsComponent } from './shor-ord-items.component';

describe('ShorOrdItemsComponent', () => {
  let component: ShorOrdItemsComponent;
  let fixture: ComponentFixture<ShorOrdItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorOrdItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorOrdItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
