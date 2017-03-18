import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';

import BoxService from './box.service'
import {Http, RequestOptions, ConnectionBackend,XHRBackend} from '@angular/http';
import { async, TestBed } from '@angular/core/testing';
import {inject, beforeEachProviders} from  "@angular/core/testing";

describe('MockBackend: BoxService', () => {
  let mockbackend, service;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ HttpModule ],
  //     providers: [
  //       BoxService,
  //       { provide: XHRBackend, useClass: MockBackend }
  //     ]
  //   })
  // });
  //
  // beforeEach(inject([BoxService, XHRBackend], (_service, _mockbackend) => {
  //   service = _service;
  //   mockbackend = _mockbackend;
  // }));

  //specs
  // it('should return mocked response (sync)', () => {
  //   let response = ["ru", "es"];
  //   mockbackend.connections.subscribe(connection => {
  //     connection.mockRespond(new Response({body: JSON.stringify(response)}));
  //   });
  //   service.getCategory().subscribe(languages => {
  //     expect(languages).toContain('ru');
  //     expect(languages).toContain('es');
  //     expect(languages.length).toBe(2);
  //   });
  // });


})
