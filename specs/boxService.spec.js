import { BoxService } from './services/boxService.js';

describe("BoxService", function() {
  var service;
  beforeEach(function(){
    service = new BoxService
  });

  describe('getAllItemsInRootFolder', function() {
    it('returns an object representing all the files in Box', function() {
      let callBack = function(err, data) {
        if(err) throw err;
        expect(data).toNotBe(null)
      }
      service.getAllItemsInRootFolder(callBack)
    });
  });

  describe('getCategory', function() {
    it('returns the categories thats specified by the folder structure', function() {
      // An intentionally failing test. No code within expect() will never equal 4.
      expect(true).toEqual(false)
    });
  });

  describe('getSubCategory', function() {
    it('returns the sub folders from this specified directory', function() {
      // An intentionally failing test. No code within expect() will never equal 4.
      expect(true).toEqual(false)
    });
  });

  describe('searchBoxWithMetaData', function() {
    it('returns the box files with associatede meta data', function() {
      // An intentionally failing test. No code within expect() will never equal 4.
      expect(true).toEqual(false)
    });
  });
})


// console.log('data is' + Object.keys(data));
// console.log('IsTotal_Count' + data["istotal_count"]);
// console.log('Entries' + data["entries"]);
// console.log('Offset' + data["offset"]);
// console.log('Limit' + data["limit"]);
// console.log('Order' + data["order"]);
