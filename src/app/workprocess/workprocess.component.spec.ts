import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed, fakeAsync } from '@angular/core/testing';

// Load the implementations that should be tested
import { WorkprocessComponent } from './workprocess.component';
import { WorkprocessService } from './workprocess.service';

// HTTP And testing
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {  } from 'jasmine';

const groupExpectedResult = {
      category : [
        {
          name: 'Engineering',
          id: '17549929803'
        },
        {
          name: 'Finance',
          id: '17467611887'
        },
        {
          name: 'HR',
          id: '17470515671'
        }
      ]
};

const subGroupExpectedResult = {
      subCategory : [
        {
          id: '17999076284',
          name: 'Invoices'
        },
        {
          id: '18008543219',
          name: 'POD'
        }
      ]
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
            WorkprocessComponent, WorkprocessService, BaseRequestOptions, MockBackend,
            {
                provide: Http,
                useFactory: (backend, defaultOptions) => {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions],
            }
        ]
    }));

    it('should log ngOnInit', inject([WorkprocessComponent],
      (workprocess: WorkprocessComponent) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        workprocess.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));

    it('should be able to inject workprocess service', fakeAsync(inject(
        [MockBackend, WorkprocessService], (backend, workprocessService) => {
          expect(workprocessService).toBeDefined();
    })));

    it('should return groupExpectedResult when getGroups is called',
      fakeAsync(inject([MockBackend, WorkprocessService],
        (backend, workprocessService) => {

          backend.connections.subscribe(
            (c: MockConnection) => {
                c.mockRespond(new Response(new ResponseOptions({ body: groupExpectedResult})));
            });

          workprocessService.getGroups().subscribe((res) => {
            expect(res.json()).toEqual(groupExpectedResult);
          });

    })));

    it('should return subGroupExpectedResult when getSubGroups is called',
      fakeAsync(inject([MockBackend, WorkprocessService],
        (backend, workprocessService) => {

          backend.connections.subscribe(
            (c: MockConnection) => {
                c.mockRespond(new Response(new ResponseOptions({ body: subGroupExpectedResult})));
            });

          workprocessService.getSubGroups().subscribe((res) => {
            expect(res.json()).toEqual(subGroupExpectedResult);
          });

    })));

});
