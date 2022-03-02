import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item13Component } from './item13.component';

describe('Item13Component', () => {
  let component: Item13Component;
  let fixture: ComponentFixture<Item13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
