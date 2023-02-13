import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import {TestDataComponent} from "./test-data/test-data.component";
import {TestDataService} from "./test-data/test-data.service";



let fixture: ComponentFixture<TestDataComponent>;

describe('TestDataComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [
      ]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(TestDataComponent)
    });
  }));

  it('should display the movies', () => {


    expect(fixture.debugElement.nativeElement.textContent).toContain('Rambo')
    expect(fixture.debugElement.nativeElement.textContent).toContain('Star Wars')
    expect(fixture.debugElement.nativeElement.textContent).toContain('Avatar')
  });

});
