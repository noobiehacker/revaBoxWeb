import boxModule from './box'
import BoxService from './box.service'

describe('Box', () => {

  beforeEach(window.module(boxModule));

  describe('Service', function(){

    this.timeout(10000);

    describe('#getCategory', () => {

      let service = new BoxService();

      it('should return the categories for this box app', function(done) {

        service.getCategory((response) => {
          console.log("hello" + response)
          expect(response).to.exist;
          done();
        });

      });

    });

    // describe('#getSubCategory', () => {
    //   it('should return the subcategory for this box app', () =>{
    //     let service = makeService();
    //     expect(service.getSubCategory()).to.exist;
    //   });
    // });

  });

});
