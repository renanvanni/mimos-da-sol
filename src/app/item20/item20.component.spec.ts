import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item20Component } from './item20.component';

describe('Item20Component', () => {
  let component: Item20Component;
  let fixture: ComponentFixture<Item20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
