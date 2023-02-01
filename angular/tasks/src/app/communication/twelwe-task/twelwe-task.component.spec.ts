import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelweTaskComponent } from './twelwe-task.component';

describe('TwelweTaskComponent', () => {
  let component: TwelweTaskComponent;
  let fixture: ComponentFixture<TwelweTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelweTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelweTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
