import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item17Component } from './item17.component';

describe('Item17Component', () => {
  let component: Item17Component;
  let fixture: ComponentFixture<Item17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
