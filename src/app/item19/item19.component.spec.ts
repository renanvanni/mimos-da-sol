import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item19Component } from './item19.component';

describe('Item19Component', () => {
  let component: Item19Component;
  let fixture: ComponentFixture<Item19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
