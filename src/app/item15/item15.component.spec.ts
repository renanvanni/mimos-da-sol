import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item15Component } from './item15.component';

describe('Item15Component', () => {
  let component: Item15Component;
  let fixture: ComponentFixture<Item15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
