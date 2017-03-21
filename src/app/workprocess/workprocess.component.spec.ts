import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { WorkprocessComponent } from './workprocess.component';

describe('Workprocess', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      WorkprocessComponent
    ]
  }));

  it('should log ngOnInit', inject([WorkprocessComponent], (workprocess: WorkprocessComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    workprocess.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

  it('should be able to inject a service' inject([WorkprocessService], (workprocess: WorkprocessService) => {

  }));

  //TODO IMPLEMENT!!!

});
