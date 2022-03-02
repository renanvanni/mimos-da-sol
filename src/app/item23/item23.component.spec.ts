import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item23Component } from './item23.component';

describe('Item23Component', () => {
  let component: Item23Component;
  let fixture: ComponentFixture<Item23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
