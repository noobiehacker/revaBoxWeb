import WorkprocessModule from './workprocess'
import WorkprocessController from './workprocess.controller';
import WorkprocessComponent from './workprocess.component';
import WorkprocessTemplate from './workprocess.html';

describe('Workprocess', () => {
  let $rootScope, workProcessService, makeController, workprocessService;

  beforeEach(window.module(WorkprocessModule));

  beforeEach(inject((_workprocessService_) => {
    workprocessService = _workprocessService_
    console.log(workprocessService)
  }));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WorkprocessController();
    };
  }));

  describe('WorkProcessService', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a topName property', () => {
      let controller = makeController();
      expect(controller).to.have.property('topName');
    });

    it('has a bottomName property', () => {
      let controller = makeController();
      expect(controller).to.have.property('bottomName');
    });

    it('has a category property', () => {
      let controller = makeController();
      expect(controller).to.have.property('category');
    });

    it('has a subcategoryMap property', () => {
      let controller = makeController();
      expect(controller).to.have.property('subcategoryMap');
    });

    it('has a getDataFromService method that populates properties', () => {
      let controller = makeController();
      let catExpectation = ["Engineering","Finance","HR"];
      let financeSubCatExpectation = ["Invoice","POD"];
      controller.getDataFromService();
      expect(controller.category).to.be.eql(catExpectation);
      expect(controller.subcategoryMap.get("Finance")).to.be.eql(financeSubCatExpectation);
    });

    it('has a getSubCategory method that returns an empty array if selectedCategory is not defined', () => {
      let controller = makeController();
      expect(controller.selectedCategory).to.not.exist;
      expect(controller.getSubCategory()).to.be.eql([]);
    });

    describe('getSubcategory', () => {
      it('returns \'hrSubcategory\' if selectedCategory is \'HR\'', () => {
        let controller = makeController();
        let key = "Finance";
        controller.getDataFromService();
        let hrIndex = controller.category.findIndex((element) => {
            return element == key;
        });
        controller.selectedCategory = controller.category[hrIndex];
        expect(controller.getSubCategory(key)).to.be.eql(["Invoice","POD"]);
      });
      it('returns [] when selectedCategory is not \"Finance\"', () =>{
        let controller = makeController();
        let key = "Hr";
        controller.getDataFromService();
        let hrIndex = controller.category.findIndex((element) => {
            return element == key;
        });
        controller.selectedCategory = controller.category[hrIndex];
        console.log(controller.getSubCategory(key))
        console.log([])
        expect(controller.getSubCategory(key)).to.be.eql([]);
      });
    });

    describe('getSubCategoryDropDown returns the subcategory array from map', () => {
      it('returns Finance, POD when selected Category is \'HR\'', () =>{
        let controller = makeController();
        controller.getDataFromService();
        controller.selectedCategory = "HR"
        let expected = controller.getSubCategory(controller.selectedCategory);
        expect(controller.getSubCategoryDropDown()).to.be.eql(expected)
      })
    });

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WorkprocessTemplate).to.match(/{{\s?\$ctrl\.topName\s?}}/g);
      expect(WorkprocessTemplate).to.match(/{{\s?\$ctrl\.bottomName\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WorkprocessComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WorkprocessTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WorkprocessController);
      });
  });
});
