import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item18Component } from './item18.component';

describe('Item18Component', () => {
  let component: Item18Component;
  let fixture: ComponentFixture<Item18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
