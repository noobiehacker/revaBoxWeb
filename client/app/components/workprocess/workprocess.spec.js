import WorkprocessModule from './workprocess'
import WorkprocessController from './workprocess.controller';
import WorkprocessComponent from './workprocess.component';
import WorkprocessTemplate from './workprocess.html';

describe('Workprocess', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WorkprocessModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WorkprocessController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('has a category property', () => {
      let controller = makeController();
      expect(controller).to.have.property('category');
    });

    it('has a subcategory property', () => {
      let controller = makeController();
      expect(controller).to.have.property('subcategoryMap');
    });

    it('has a subcategoryMap property', () => {
      let controller = makeController();
      expect(controller).to.have.property('subcategoryMap');
    });

    it('has a getCategory method that returns the category array', () => {
      let controller = makeController();
      let expected = ["itemOne", "itemTwo", "itemThree"];
      controller.category = expected;
      expect(controller.getCategory()).to.be.eql(expected);
    });

    it('has a getDataFromService method that populates properties', () => {
      let controller = makeController();
      let catExpectation = ["Engineering","Finance","HR"];
      let hrSubCatExpectation = ["Finance","POD"];
      controller.getDataFromService();
      expect(controller.category).to.be.eql(catExpectation);
      expect(controller.subcategoryMap.get("HR")).to.be.eql(hrSubCatExpectation);
    });

    it('has a getSubCategory method that returns an empty array if selectedCategory is not defined', () => {
      let controller = makeController();
      expect(controller.selectedCategory).to.not.exist;
      expect(controller.getSubCategory()).to.be.eql([]);
    });

    describe('getSubcategory', () => {
      it('returns \'hrSubcategory\' if selectedCategory is \'HR\'', () => {
        let controller = makeController();
        let expected = ["Finance","POD"]
        let key = "HR";
        controller.getDataFromService();
        let hrIndex = controller.category.findIndex((element) => {
            return element == key
        });
        controller.selectedCategory = controller.category[hrIndex]
        expect(controller.getSubCategory(key)).to.be.eql(expected)
      });
      it('returns [] when selectedCategory is not HR', () =>{
        let controller = makeController();
        let key = "Finance";
        let hrIndex = controller.category.findIndex((element) => {
            return element == key
        });
        controller.getDataFromService();
        controller.selectedCategory = controller.category[hrIndex]
        expect(controller.getSubCategory(key)).to.be.eql([])
      });
    });

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WorkprocessTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
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
