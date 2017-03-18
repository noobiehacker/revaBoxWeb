import boxModule from './box'
import BoxService from './box.service'

describe('Box', () => {

  let $httpBackend, $http, $rootScope, makeService;

  beforeEach(window.module(boxModule));
  beforeEach(inject(($injector) => {
      $httpBackend = $injector.get('$httpBackend');
      $http = $injector.get('$http');
    }));
  beforeEach(inject((_$rootScope_) => {
      $rootScope = _$rootScope_;
      makeService = () => {
        return new BoxService();
      };
      console.log(makeService())
    }));

  describe('Service', function(){

    //this.timeout(10000);

    describe('#getCategory', () => {

      it('should return the categories for this box app', function(done) {


        //let url = service.getServerUrl() + "/category"
        //$httpBackend.expectGET(url).respond(200,'RESULT');
        //let observable = service.getCategory();
        //$httpBackend.flush();
        //expect(observable).to.exist;
        done()
      });

    });

  });

});
