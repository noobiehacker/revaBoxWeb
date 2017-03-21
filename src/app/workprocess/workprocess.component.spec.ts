import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed, fakeAsync } from '@angular/core/testing';

// Load the implementations that should be tested
import { WorkprocessComponent } from './workprocess.component';
import { WorkprocessService } from './workprocess.service';

//HTTP And testing
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const mockData = {
  "id": 2,
  "name": "Demaryius Thomas",
  "phone": "(720) 213-9876",
  "address": {
    "street": "5555 Marion Street",
    "city": "Denver",
    "state": "CO",
    "zip": "80202"
  }
};

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
      WorkprocessComponent , WorkprocessService , BaseRequestOptions, MockBackend,
      {
        provide: Http,
        useFactory: (backend, defaultOptions) => {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions],
      }
    ]
  }));

  it('should log ngOnInit', inject([WorkprocessComponent], (workprocess: WorkprocessComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    workprocess.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

  it('should be able to inject and call getAPIData Function', fakeAsync(inject(
    [MockBackend, WorkprocessService], (backend, workprocessService) => {
      backend.connections.subscribe(
        (c: MockConnection) => {
          c.mockRespond(new Response(new ResponseOptions({ body: mockData })));
        });
        workprocessService.getAPIData().subscribe(res => {
          expect(res.json()).toEqual(mockData);
        });
  })));

});
