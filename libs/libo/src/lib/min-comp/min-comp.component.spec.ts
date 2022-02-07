import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCompComponent } from './min-comp.component';

describe('MinCompComponent', () => {
  let component: MinCompComponent;
  let fixture: ComponentFixture<MinCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
