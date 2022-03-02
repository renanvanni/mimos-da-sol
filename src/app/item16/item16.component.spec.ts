import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item16Component } from './item16.component';

describe('Item16Component', () => {
  let component: Item16Component;
  let fixture: ComponentFixture<Item16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
