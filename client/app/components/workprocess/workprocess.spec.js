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
      expect(controller).to.have.property('category')
    });

    it('has a subcategory property', () => {
      let controller = makeController();
      expect(controller).to.have.property('subcategory')
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
